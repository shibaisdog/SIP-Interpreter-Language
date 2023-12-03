module.exports = (line) => {
    if (line.indexOf("lop") != -1) {
        if (line.indexOf("<") == -1 || line.lastIndexOf(">") == -1) {
            throw new TypeError("ex: lop<true>;")
        }
        const ifs = line.substring(line.indexOf("<")+1,line.lastIndexOf(">"))
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("lop")),`while (${ifs}) {`)}
        return out
    }
    return {"exports":line};
}