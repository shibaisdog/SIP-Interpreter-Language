module.exports = (line) => {
    if (line.indexOf("init") != -1) {
        if (line.indexOf("<") == -1 || line.indexOf(">") == -1) {
            throw new TypeError(`Error Line : ${line} / ex: init<>;`)
        }
        const input = line.substring(line.indexOf("<")+1,line.lastIndexOf(">"))
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("init")),`constructor(${input}) {\n`)}
        return out
    }
    return {"exports":line};
}