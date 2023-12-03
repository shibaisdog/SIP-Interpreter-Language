const fs = require('fs')
const path = require('path')
const write = require('./process/file.js')
const Process = require('./process/process.js')
const conversion = require("./Interpreter.js")
const run_true = (bath,file) => {
    const data = conversion(fs.readFileSync(path.join(bath,file)).toString('utf-8'))
    const out = write(bath,file,data)
    Process([out])
}
const run_false = (bath,file) => {
    const data = conversion(fs.readFileSync(path.join(bath,file)).toString('utf-8'))
    write(bath,file,data)
}
module.exports = {
    "trueC" : run_true,
    "falseC" : run_false
}