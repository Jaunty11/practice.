const fs = require("fs");

async function main() {
    await cleanFile("a.txt");
    console.log("Done cleaning file");
}

function cleanFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile('b.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log("Error reading file");
                reject(err);
                return;
            } else {
                console.log("File is correct");
            }

            const trimmedContent = data.trim();
            console.log("Trimmed Content:", trimmedContent);

            // Write the trimmed content back to the file
            fs.writeFile("s.txt", trimmedContent, 'utf-8', (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    reject(err);
                } else {
                    console.log("File has been trimmed and saved.");
                    resolve();
                }
            });
        });
    });
}

main();
