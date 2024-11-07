const fs = require('fs');

// Read the ASCII codes from the file and split by space
const asciiCodes = fs.readFileSync('/Users/ipsit/Desktop/new/practice./source.txt', { encoding: 'ascii' }).trim().split(" ");

// Convert ASCII codes to characters
const asciiContent = asciiCodes.map(code => String.fromCharCode(Number(code))).join("");

// Write the converted text to a new file with UTF-8 encoding
fs.writeFileSync('destination.txt', asciiContent, { encoding: 'utf-8' });

// Read and display the UTF-8 encoded content from the new file
const utfContent = fs.readFileSync('destination.txt', { encoding: 'utf-8' });
console.log('UTF-8 Encoded Content:\n', utfContent);
