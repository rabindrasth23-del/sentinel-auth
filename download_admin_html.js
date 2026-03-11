const fs = require('fs');

const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzdkZjFkMDlmNGY4ZjQwN2ZhMjA2Y2Y2MjM0NGM4MzMwEgsSBxCUj6HjywgYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjgzMzU3NTcyMTM4NDkzMDA4&filename=&opi=89354086';

async function download() {
    try {
        console.log("Fetching URL...");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        fs.writeFileSync('admin_dashboard_stitch.html', html);
        console.log("Download complete. Saved " + html.length + " characters.");
    } catch (e) {
        console.error("Download failed:", e);
    }
}

download();
