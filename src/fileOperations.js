const fs = require("fs");

fs.writeFileSync("Demo.txt", "My first note using Node JS");
// writeFileSync is a sync method used for writing output to a file

fs.appendFileSync("Demo.txt", "\n Developer : Angad");