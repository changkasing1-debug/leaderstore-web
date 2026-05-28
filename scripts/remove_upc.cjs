const fs = require('fs');

const path = '/home/runner/workspace/artifacts/walmart-store/src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// Remove all lines that match "    upc: ..." exactly (4 spaces indent)
const lines = content.split('\n');
const filtered = lines.filter(line => !line.match(/^    upc: "[^"]+",?\s*$/));

if (filtered.length !== lines.length) {
  const removed = lines.length - filtered.length;
  content = filtered.join('\n');
  fs.writeFileSync(path, content);
  console.log(`Removed ${removed} UPC lines from data.ts`);
} else {
  console.log('No UPC lines found to remove');
}

// Verify remaining UPC references
const remaining = content.match(/upc/gi);
console.log(`Remaining UPC references: ${remaining ? remaining.length : 0}`);
