// os module import
const os = require("os")

// consoling userInfo
console.log(os.userInfo());

// consoling uptime how long a computer has been running
console.log("The system uptime" + " " + os.uptime() + "s") 

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

