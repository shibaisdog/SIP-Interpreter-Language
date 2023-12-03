module.exports = (line) => {
    if (line.indexOf("else") != -1) {
        var out = {"exports":line.replaceAll(line.substring(line.indexOf("if")),`else {`)}
        return out
    }
    return {"exports":line};
}