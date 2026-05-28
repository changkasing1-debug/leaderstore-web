const fs = require('fs');

const path = '/home/runner/workspace/artifacts/walmart-store/src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// Map SKU to new unitPrice
const newPrices = {
  'MT64-1124K': 2569.36,
  '63-9034': 296.00,
  'HP-7011': 19.20,
  'KNA-2438': 13.60,
  '790-561': 13.60,
  'KN798453': 65.60,
  '985-24-173': 184.00,
  '15005': 44.99,
  'K6258-36': 380.00,
  'D342711': 303.19,
  'H7812': 100.79,
  '12-801-1': 163.99,
  'OTFQT': 14.39,
  '11AVMOTHSG': 65.59,
  '860122': 11.99,
  'H5-AGM': 207.99,
  'CQ-9005': 11.19,
  'W2977': 35.19,
  'SD35': 119.99,
  '19425': 47.19,
  '07480': 3.19,
  '08090': 29.59,
};

// For each SKU, find the unitPrice line in the product block and update it
for (const [sku, newPrice] of Object.entries(newPrices)) {
  // Find the product block with this sku, then find unitPrice in that block
  const skuRegex = new RegExp(`(    sku: "${sku}",\\n)(\\s+unitPrice: )([\\d.]+),`);
  const match = content.match(skuRegex);
  if (match) {
    const oldPrice = match[3];
    content = content.replace(match[0], `${match[1]}${match[2]}${newPrice},`);
    console.log(`Updated ${sku}: $${oldPrice} → $${newPrice}`);
  } else {
    // Try alternate approach - find unitPrice near this sku
    const idx = content.indexOf(`sku: "${sku}"`);
    if (idx !== -1) {
      const block = content.slice(idx - 200, idx + 100);
      const priceMatch = block.match(/unitPrice: ([\d.]+),/);
      if (priceMatch) {
        const oldPrice = priceMatch[1];
        const newBlock = block.replace(priceMatch[0], `unitPrice: ${newPrice},`);
        content = content.slice(0, idx - 200) + newBlock + content.slice(idx + 100);
        console.log(`Updated ${sku}: $${oldPrice} → $${newPrice}`);
      } else {
        console.log(`Could not find unitPrice for ${sku}`);
      }
    } else {
      console.log(`Could not find SKU ${sku}`);
    }
  }
}

fs.writeFileSync(path, content);

// Verify
const verify = fs.readFileSync(path, 'utf8');
for (const [sku, expected] of Object.entries(newPrices)) {
  const idx = verify.indexOf(`sku: "${sku}"`);
  if (idx !== -1) {
    const block = verify.slice(idx - 200, idx + 100);
    const priceMatch = block.match(/unitPrice: ([\d.]+),/);
    if (priceMatch) {
      const actual = parseFloat(priceMatch[1]);
      if (Math.abs(actual - expected) > 0.01) {
        console.log(`MISMATCH: ${sku} expected $${expected} but got $${actual}`);
      } else {
        console.log(`OK: ${sku} = $${actual}`);
      }
    } else {
      console.log(`NO PRICE: ${sku}`);
    }
  } else {
    console.log(`NOT FOUND: ${sku}`);
  }
}
console.log('Done!');
