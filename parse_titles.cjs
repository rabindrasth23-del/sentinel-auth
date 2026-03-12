const fs = require('fs');
const path = require('path');
const baseDir = 'c:\\Users\\ACER\\Downloads';
for (let i = 0; i <= 36; i++) {
  const suffix = i === 0 ? '' : ` (${i})`;
  const folder = `stitch_generated_screen${suffix}`;
  const folderPath = path.join(baseDir, folder);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath);
    const htmlFile = files.find(f => f.endsWith('.html'));
    if (htmlFile) {
      const filePath = path.join(folderPath, htmlFile);
      const content = fs.readFileSync(filePath, 'utf-8');
      const match = content.match(/<title>([\s\S]*?)<\/title>/);
      const title = match ? match[1].trim() : 'No Title';
      console.log(`${folder}: ${title}`);
    } else {
      console.log(`${folder}: No HTML file found`);
    }
  }
}
