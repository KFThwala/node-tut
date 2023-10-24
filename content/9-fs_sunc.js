// FILE SYSTEM

const fs = require("fs")

const first = fs.readFileSync("content/first.txt","utf-8")
const second = fs.readFileSync("content/second.txt","utf-8")

fs.writeFileSync(
    "content/result.txt",
     "the first file to be wtitten with writefilesync",
     {flag: "a"})


console.log(first)
console.log(second)