module.exports = (line) => {
    if (line.indexOf("var") != -1) {
        if (line.indexOf("?") == -1 || line.indexOf("=") == -1) {
            throw new TypeError(`Error Line : ${line} / ex: var a?string = 'a';`)
        }
        const name = line.substring(line.indexOf("var")+3,line.indexOf("?")).replaceAll(" ","")
        const type = line.substring(line.indexOf("?")+1,line.lastIndexOf("=")).replaceAll(" ","")
        const value = line.substring(line.lastIndexOf("=")+1)
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("var")),`var ${name}:${type} = ${value}\n`)}
        return out
    }
    return {"exports":line};
}