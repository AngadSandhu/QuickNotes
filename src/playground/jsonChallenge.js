const fs  = require("fs");
let playerData = [{name: "Cristiano", age: 36, position: "forward"},{name: "Marcelo", age: 36, position: "left back"}];
let fileData = JSON.stringify(playerData);
fs.writeFileSync("players.txt",fileData);