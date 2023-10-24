const firstName = require("./5 utils")
const name = require("./2 name_module")
const names = require("./6 alternative_exports.module")
require("./mind-grenade")
firstName("sarah")
firstName(name.john)

console.log(names.singleName)



