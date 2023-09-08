const fs = require('fs');
const path = require('path');

const typesDir = path.join(__dirname, '../src', 'types');
const indexFile = path.join(typesDir, 'index.ts');

const typeFiles = fs.readdirSync(typesDir).filter(file => file.endsWith('.ts') && file !== 'index.ts');

let exportsString = '';
for (const file of typeFiles) {
    const exportName = path.basename(file, '.ts');
    exportsString += `export * from './${exportName}';\n`;
}

fs.writeFileSync(indexFile, exportsString);
