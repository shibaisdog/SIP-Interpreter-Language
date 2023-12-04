module.exports = (line) => {
    if (line.indexOf("throw") != -1) {
        if (line.indexOf("(") == -1 || line.indexOf(")") == -1) {
            throw new TypeError(`Error Line : ${line} / ex: throw new Error("error message")`)
        }
        const error = line.substring(line.indexOf("(")+1,line.lastIndexOf(")"))
        if (line.indexOf("Error") == -1) {
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("throw")),`throw Error(${error}) \n`)}
        } else if (line.indexOf("TypeError") == -1) {
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("throw")),`throw TypeError(${error}) \n`)}
        } else {
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("throw")),`throw ${error} \n`)}
        }
        return out
    }
    return {"exports":line};
}