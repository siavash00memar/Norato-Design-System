import fs from 'node:fs';

const files = [
  'packages/tokens/src/color.css',
  'packages/tokens/src/typography.css',
  'packages/tokens/src/layout.css',
];
for (const file of files) {
  if (!fs.existsSync(file)) throw new Error(`Missing token file: ${file}`);
}
console.log(`Norato token files present: ${files.length}`);
