module.exports = (line) => {
    if (line.indexOf("fun") != -1) {
        if (line.indexOf("<") == -1 || line.indexOf(">") == -1 || line.indexOf(":") == -1) {
            throw new TypeError(`Error Line : ${line} / ex: fun<name:async:input1,input2>;`)
        }
        const input = line.substring(line.lastIndexOf(":")+1,line.indexOf(">"))
        const name = line.substring(line.indexOf("<")+1,line.indexOf(":"))
        const type = line.substring(line.indexOf(":")+1,line.lastIndexOf(":"))
        if (type == "async") {
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("fun")),`const ${name} = async (${input}) => {\n`)}
        } else if (type.indexOf('listen') != -1) {
            if (type.indexOf('[') == -1 || type.indexOf(']') == -1) {throw new TypeError("ex: fun<app.listen:listen[port]:>;")}
            const read = type.substring(type.indexOf('[')+1,type.lastIndexOf(']'))
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("fun")),`${name}(${read}, (${input}) => {\n`)}
        } else {
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("fun")),`const ${name} = (${input}) => {\n`)}
        }
        return out
    } else if (line.indexOf("end[]") != -1) {
        line = line.replaceAll("end[]",'})')
    }
    return {"exports":line};
}