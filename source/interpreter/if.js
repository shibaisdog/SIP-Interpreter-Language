module.exports = (line) => {
    if (line.indexOf("if") != -1) {
        if (line.indexOf("<") == -1 || line.lastIndexOf(">") == -1) {
            throw new TypeError("ex: if <a == true>;")
        }
        const ifs = line.substring(line.indexOf("<")+1,line.lastIndexOf(">"))
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("if")),`if (${ifs}) {`)}
        return out
    }
    return {"exports":line};
}