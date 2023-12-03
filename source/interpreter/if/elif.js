module.exports = (line) => {
    if (line.indexOf("elif") != -1) {
        if (line.indexOf("<") == -1 || line.lastIndexOf(">") == -1) {
            throw new TypeError("ex: if <a == true>;")
        }
        const ifs = line.substring(line.indexOf("<")+1,line.lastIndexOf(">"))
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("elif")),`else if (${ifs}) {`)}
        return out
    }
    return {"exports":line};
}