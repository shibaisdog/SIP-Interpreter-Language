module.exports = (line) => {
    if (line.indexOf("catch") != -1) {
        if (line.indexOf("<") == -1 || line.indexOf(">") == -1) {
            throw new TypeError(`Error Line : ${line} / ex: try;end(); "catch <error>;end();"`)
        }
        const error = line.substring(line.indexOf("<")+1,line.lastIndexOf(">"))
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("catch")),`catch (${error}) {\n`)}
        return out
    }
    return {"exports":line};
}