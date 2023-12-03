const fs = require('fs')
const path = require('path')
module.exports = (paths,file,value) => {
    const dir = path.join(paths,'/out/')
    try {fs.mkdirSync(dir)} catch (error) {}
    const refile = dir+file.replaceAll('.sp','.ts')
    fs.writeFileSync(refile,value,'utf-8') //write compiled file
    fs.writeFileSync(path.join(paths,'tsconfig.json'),fs.readFileSync(path.join(__dirname,'../interpreter/publish/tsconfig.json')),'utf-8') //write tsconfig.json
    return refile
}