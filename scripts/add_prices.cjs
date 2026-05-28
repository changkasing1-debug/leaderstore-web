const fs = require('fs');

const path = '/home/runner/workspace/artifacts/walmart-store/src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// Map SKU to unitPrice
const prices = {
  'RK-3951': 149.99,
  '63-1147': 299.99,
  'MT64-1124K': 2499.99,
  '63-9034': 349.99,
  'HP-7011': 14.99,
  'KNA-2438': 24.99,
  '790-561': 19.99,
  'KN798453': 89.99,
  '985-24-173': 179.99,
  '15005': 34.99,
  'K6258-36': 349.99,
  'D342711': 249.99,
  'H7812': 129.99,
  '12-801-1': 159.99,
  'OTFQT': 12.99,
  '11AVMOTHSG': 79.99,
  '860122': 14.99,
  'H5-AGM': 249.99,
  'CQ-9005': 24.99,
  'W2977': 79.99,
  'SD35': 149.99,
  '07480': 19.99,
  '08090': 24.99,
  '19425': 29.99,
};

// For each product block, find sku and insert unitPrice after priceRange
const skuRegex = /    sku: "([^"]+)",/g;
let modified = content;
let match;

// We need to insert unitPrice after the priceRange line in each product block
// Find each product's priceRange line and add unitPrice after it
const priceRangeRegex = /    priceRange: "Contact for pricing",\n/g;

let offset = 0;
const priceRangeMatches = [...modified.matchAll(priceRangeRegex)];

// Map each priceRange match to a product by counting
let productIndex = 0;
for (const m of priceRangeMatches) {
  const idx = m.index + m[0].length + offset;
  // Find the sku in the product block after this priceRange
  const after = modified.slice(idx, idx + 300);
  const skuMatch = after.match(/    sku: "([^"]+)",/);
  if (skuMatch) {
    const sku = skuMatch[1];
    const price = prices[sku];
    if (price !== undefined) {
      const insert = `    unitPrice: ${price},\n`;
      modified = modified.slice(0, idx) + insert + modified.slice(idx);
      offset += insert.length;
    }
  }
  productIndex++;
}

fs.writeFileSync(path, modified);

// Verify
const verify = fs.readFileSync(path, 'utf8');
const unitPriceMatches = [...verify.matchAll(/unitPrice: ([\d.]+)/g)];
console.log('Products with unitPrice:', unitPriceMatches.length);
for (const m of unitPriceMatches) {
  console.log('  $' + m[1]);
}
console.log('Done!');
