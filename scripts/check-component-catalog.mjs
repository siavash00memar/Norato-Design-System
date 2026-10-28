import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const catalogPath = path.join(root, 'packages/components/src/catalog.ts')
const catalogSource = fs.readFileSync(catalogPath, 'utf8')
const starts = [...catalogSource.matchAll(/\{\s*id:\s*'[^']+'/g)]
const rows = starts.map((start, index) => {
  const end = starts[index + 1]?.index ?? catalogSource.indexOf('\n]', start.index)
  const source = catalogSource.slice(start.index, end)
  const field = pattern => source.match(pattern)?.[1] ?? ''
  return [source, field(/id:\s*'([^']+)'/), field(/slug:\s*'([^']+)'/), field(/name:\s*'([^']+)'/), field(/tags:\s*\[([^\]]*)\]/), field(/status:\s*'(Implemented|Adapted|Proposed|Deferred)'/), field(/note:\s*'([^']*)'/), field(/contractPath:\s*'([^']+)'/), field(/specimenKey:\s*'([^']+)'/), source]
})
const errors = []
const fail = message => errors.push(message)

if (rows.length !== 49) fail(`Expected 49 catalog records; found ${rows.length}.`)
for (const [fieldIndex, label] of [[1, 'id'], [2, 'slug'], [3, 'name']]) {
  const values = rows.map(row => row[fieldIndex])
  if (new Set(values).size !== values.length) fail(`Catalog ${label} values are not unique.`)
}

const listedContracts = new Set()
const allowedUsageKeys = new Set(['button', 'input', 'select', 'checkbox', 'radio'])
const requiredContractSections = ['Overview', 'Anatomy', 'Variants', 'Sizes', 'States', 'Parts', 'Usage', 'Accessibility', 'Tokens']
const specimenSource = fs.readFileSync(path.join(root, 'apps/vue/src/ComponentSpecimen.vue'), 'utf8')
const usageSource = fs.readFileSync(path.join(root, 'apps/vue/src/usage-examples.ts'), 'utf8')
for (const row of rows) {
  const [, id, slug, name, tags, status, , contractPath, specimenKey, extras] = row
  if (id !== slug) fail(`${name}: stable id and route slug must match.`)
  if (!tags.trim()) fail(`${name}: search tags are empty.`)
  if (specimenKey !== name) fail(`${name}: specimen mapping does not point to its matching record.`)
  if (!contractPath.startsWith('docs/component-contracts/') || !contractPath.endsWith('.md')) fail(`${name}: contractPath must point to one Markdown contract.`)
  const contractFile = path.join(root, contractPath)
  if (!fs.existsSync(contractFile)) fail(`${name}: missing contract ${contractPath}.`)
  else {
    const contract = fs.readFileSync(contractFile, 'utf8')
    for (const section of requiredContractSections) if (!new RegExp(`^## ${section}$`, 'm').test(contract)) fail(`${name}: contract is missing its ${section} section.`)
  }
  listedContracts.add(path.basename(contractPath))
  if (!specimenSource.includes(`name==='${specimenKey}'`)) fail(`${name}: missing visual specimen mapping for ${specimenKey}.`)

  const adapter = extras.match(/adapter: \{ module: '([^']+)', exportName: '([^']+)' \}/)
  const usageKey = extras.match(/usageKey: '([^']+)'/)
  if (status === 'Implemented') {
    if (!adapter) fail(`${name}: Implemented requires a Vue adapter and export.`)
    if (!usageKey || !allowedUsageKeys.has(usageKey[1])) fail(`${name}: Implemented requires a known usage example.`)
    if (usageKey && !usageSource.includes(`  ${usageKey[1]}:`)) fail(`${name}: usage example ${usageKey[1]} is missing.`)
    if (adapter) {
      const componentPath = path.join(root, 'packages/vue/src/components', adapter[1])
      if (!fs.existsSync(componentPath)) fail(`${name}: missing adapter file ${adapter[1]}.`)
      const exports = fs.readFileSync(path.join(root, 'packages/vue/src/index.ts'), 'utf8')
      if (!exports.includes(`as ${adapter[2]}`)) fail(`${name}: Vue entry does not export ${adapter[2]}.`)
    }
  } else if (adapter || usageKey) fail(`${name}: non-implemented records cannot advertise an executable adapter or usage snippet.`)
}

const contractFiles = fs.readdirSync(path.join(root, 'docs/component-contracts')).filter(file => file.endsWith('.md') && file !== 'README.md')
if (contractFiles.length !== 49) fail(`Expected 49 independent contracts; found ${contractFiles.length}.`)
for (const file of contractFiles) if (!listedContracts.has(file)) fail(`Contract ${file} is not reachable from the canonical catalog.`)

const appSource = fs.readFileSync(path.join(root, 'apps/vue/src/App.vue'), 'utf8')
const catalogIds = new Set(rows.map(row => row[1]))
const primitiveMap = fs.readFileSync(path.join(root, 'packages/components/src/primitive-map.ts'), 'utf8')
for (const [, id] of primitiveMap.matchAll(/^\s*'?(?:([^':]+))'?: \{ candidate:/gm)) if (!catalogIds.has(id.trim())) fail(`Primitive decision references unknown catalog ID ${id.trim()}.`)
if (/const\s+categories\s*[:=]/.test(appSource)) fail('App.vue still defines a duplicate component category catalog.')
if (/const\s+implemented\s*=|const\s+adapted\s*=/.test(appSource)) fail('App.vue still defines duplicate maturity lists.')
if (/function\s+componentSlug/.test(appSource)) fail('App.vue still derives component routes with a second slug map.')
if (/const\s+foundationChapters\s*=/.test(appSource) || /visibleFoundationCards/.test(appSource)) fail('App.vue still defines or consumes duplicate Foundation card data.')
const foundationSource = fs.readFileSync(path.join(root, 'packages/components/src/foundation-chapters.ts'), 'utf8')
const chapterIds = [...foundationSource.matchAll(/\{ id: '([0-9]{2})', title:/g)].map(match => match[1])
if (chapterIds.length !== 14 || new Set(chapterIds).size !== 14 || chapterIds[0] !== '00' || chapterIds.at(-1) !== '13') fail('Foundation chapter data must contain the 14 unique IDs 00–13.')
if (!foundationSource.includes("foundationChapters.filter(chapter => chapter.id !== '00')")) fail('Foundation overview cards must derive from the canonical chapter data.')

if (errors.length) {
  console.error(`Component catalog integrity failed (${errors.length} findings):\n- ${errors.join('\n- ')}`)
  process.exitCode = 1
} else {
  console.log(`Component catalog integrity passed: ${rows.length} unique routes, 49 contracts, explicit readiness and Vue exports.`)
}




