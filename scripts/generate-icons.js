const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateIcons() {
  const sizes = {
    'favicon.ico': 32,
    'icon.png': 32,
    'apple-icon.png': 180
  };

  const svgBuffer = await fs.readFile(path.join(__dirname, '../public/icon.svg'));

  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(svgBuffer)
      .resize(size, size)
      .toFile(path.join(__dirname, '../public', filename));
  }
}

generateIcons().catch(console.error); 