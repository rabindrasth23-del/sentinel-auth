const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/ACER/Downloads';
const results = [];

const dirs = [
  'stitch_generated_screen',
  ...Array.from({ length: 35 }, (_, i) => `stitch_generated_screen (${i + 1})`)
];

dirs.forEach(dirName => {
    const dirPath = path.join(baseDir, dirName);
    const htmlPath = path.join(dirPath, 'code.html');

    if (fs.existsSync(htmlPath)) {
        const content = fs.readFileSync(htmlPath, 'utf8');
        const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
        const title = titleMatch ? titleMatch[1].trim() : 'No Title Found';
        results.push({ dir: dirName, title: title });
    } else {
        try {
            const files = fs.readdirSync(dirPath);
            const htmlFiles = files.filter(f => f.endsWith('.html'));
            if (htmlFiles.length > 0) {
                const content = fs.readFileSync(path.join(dirPath, htmlFiles[0]), 'utf8');
                const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
                const title = titleMatch ? titleMatch[1].trim() : 'No Title Found';
                results.push({ dir: dirName, title: title });
            }
        } catch (e) {}
    }
});

fs.writeFileSync('c:/Users/ACER/OneDrive/Documents/Desktop/sentinel-auth/full_ui_map.json', JSON.stringify(results, null, 2));
console.log('Mapped ' + results.length + ' UI designs.');
