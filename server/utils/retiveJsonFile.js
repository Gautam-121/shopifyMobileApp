const fs = require('fs');
const readline = require('readline');

const firebaseToken = []

async function readJsonlFile(filePath) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const jsonData = JSON.parse(line);
    console.log("jsonData aa rha hai" , jsonData);
    if(jsonData?.metafield?.value){
        firebaseToken.push(jsonData?.metafield?.value)
    }
  }
  
  return firebaseToken
}

module.exports = readJsonlFile