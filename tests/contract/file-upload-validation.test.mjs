import test from 'node:test'
import assert from 'node:assert/strict'
import { validateNoratoFiles } from '../../packages/vue/src/components/fileUploadValidation.ts'
import { syncNativeFileList } from '../../packages/vue/src/components/fileUploadNativeFiles.ts'

const file = (name, type, size = 1024) => ({ name, type, size })
const options = overrides => ({
  accept: '.png,image/jpeg,application/pdf',
  maxSize: 10_000_000,
  maxFiles: 5,
  multiple: true,
  currentCount: 0,
  ...overrides,
})

test('accepts matching extensions and MIME types at the exact size limit', () => {
  const png = file('photo.PNG', 'application/octet-stream', 10_000_000)
  const jpeg = file('photo.jpg', 'image/jpeg')
  const pdf = file('report', 'application/pdf')

  const result = validateNoratoFiles([png, jpeg, pdf], options({ accept: '.png,image/jpeg,application/pdf' }))

  assert.deepEqual(result.accepted, [png, jpeg, pdf])
  assert.deepEqual(result.rejected, [])
})

test('keeps valid files and reports type, size, and remaining-count failures', () => {
  const valid = file('valid.pdf', 'application/pdf', 20)
  const unsupported = file('notes.txt', 'text/plain')
  const tooLarge = file('large.pdf', 'application/pdf', 101)
  const atCapacity = file('next.pdf', 'application/pdf', 50)

  const result = validateNoratoFiles([valid, unsupported, tooLarge, atCapacity], options({ maxSize: 100, maxFiles: 2, currentCount: 1 }))

  assert.deepEqual(result.accepted, [valid])
  assert.deepEqual(result.rejected.map(entry => [entry.file.name, entry.reason]), [
    ['notes.txt', 'type'],
    ['large.pdf', 'size'],
    ['next.pdf', 'count'],
  ])
})

test('single-file mode accepts one valid file and rejects further valid files by count', () => {
  const first = file('first.pdf', 'application/pdf')
  const second = file('second.pdf', 'application/pdf')
  const result = validateNoratoFiles([first, second], options({ multiple: false, currentCount: 4, maxFiles: 0 }))

  assert.deepEqual(result.accepted, [first])
  assert.deepEqual(result.rejected, [{ file: second, reason: 'count' }])
})

test('empty accept permits any type and invalid limits fail closed', () => {
  const arbitrary = file('archive.bin', 'application/octet-stream')
  const accepted = validateNoratoFiles([arbitrary], options({ accept: '' }))
  const rejected = validateNoratoFiles([arbitrary], options({ accept: '', maxFiles: Number.NaN }))

  assert.deepEqual(accepted.accepted, [arbitrary])
  assert.deepEqual(rejected.accepted, [])
  assert.deepEqual(rejected.rejected, [{ file: arbitrary, reason: 'count' }])
})

test('supports MIME wildcards and prioritizes type rejection over size rejection', () => {
  const image = file('image.webp', 'image/webp', 200)
  const wrongType = file('video.mp4', 'video/mp4', 200)
  const result = validateNoratoFiles([image, wrongType], options({ accept: 'image/*', maxSize: 100 }))

  assert.deepEqual(result.accepted, [])
  assert.deepEqual(result.rejected.map(entry => entry.reason), ['size', 'type'])
})

test('mirrors only real queued File objects into the native FileList in order', () => {
  const first = { name: 'first.pdf' }
  const sample = { name: 'sample.pdf' }
  const second = { name: 'second.png' }
  const input = { files: null }
  class Transfer {
    accepted = []
    items = { add: value => this.accepted.push(value) }
    get files() { return this.accepted }
  }

  const synced = syncNativeFileList(input, [first, undefined, second], () => new Transfer())

  assert.equal(synced, true)
  assert.deepEqual(input.files, [first, second])
  assert.equal(input.files.includes(sample), false)
  assert.equal(input.files[0], first)
  assert.equal(input.files[1], second)
})

test('clears the native FileList for an empty controlled queue', () => {
  const input = { files: [{ name: 'removed.pdf' }] }
  class Transfer {
    items = { add() {} }
    files = []
  }

  assert.equal(syncNativeFileList(input, [], () => new Transfer()), true)
  assert.deepEqual(input.files, [])
})

test('leaves the native input unchanged when it or DataTransfer is unavailable', () => {
  const existing = [{ name: 'existing.pdf' }]
  const input = { files: existing }

  assert.equal(syncNativeFileList(undefined, [], () => undefined), false)
  assert.equal(syncNativeFileList(input, [], () => undefined), false)
  assert.equal(input.files, existing)
})
