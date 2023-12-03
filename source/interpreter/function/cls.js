module.exports = (line) => {
    if (line.indexOf("cls") != -1) {
        if (line.indexOf("<") == -1 || line.indexOf(">") == -1) {
            throw new TypeError(`Error Line : ${line} / ex: cls<name>;`)
        }
        const name = line.substring(line.indexOf("<")+1,line.lastIndexOf(">"))
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("cls")),`const ${name} = class {\n`)}
        return out
    }
    return {"exports":line};
}