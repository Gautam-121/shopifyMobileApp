const fs = require('fs').promises;
const fetch = require('node-fetch');

async function downloadJsonlFile(url, destination) {
    const response = await fetch(url);
    const fileData = await response.text();
    await fs.writeFile(destination, fileData, 'utf-8');
}

module.exports =  downloadJsonlFile