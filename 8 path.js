// PATH MODULE

const path = require("path")

console.log(path.sep)

const fileName = path.join('content', 'subContent', 'test.txt');

console.log(fileName)

// getting only the last file
const base = path.basename(fileName)
console.log(base)

// getting absolute path

const absolute = path.resolve(__dirname)
console.log(absolute)