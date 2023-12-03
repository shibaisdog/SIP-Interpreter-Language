module.exports = (line) => {
    if (line.indexOf("run") != -1) {
        if (line.indexOf("<") == -1 || line.indexOf(">") == -1 || line.indexOf("?") == -1) {
            throw new TypeError("ex: run<i?1>; / run<i:n?list>;")
        }
        const input = line.substring(line.indexOf("<")+1,line.indexOf(">"))
        const value = input.substring(input.indexOf("?")+1)
        var i = input.substring(0,input.indexOf("?"))
        if (typeof value === 'string') {
            if (i.indexOf(':') != -1) {
                let is = i.substring(0,i.indexOf(':'))
                let num = i.substring(i.indexOf(':')+1)
                var line = line.replaceAll(line.substring(line.indexOf("run")),`for (let ${num} in ${value}) {\n${line.substring(0,line.indexOf("run"))}    let ${is}=${value}[${num}];\n`)
            } else {
                var line = line.replaceAll(line.substring(line.indexOf("run")),`for (let ${i} in ${value}) {\n${line.substring(0,line.indexOf("run"))}    ${i}=${value}[${i}];\n`)
            }
            var out = {"exports":line}
        } else {
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("run")),`for (let ${i}=0;${i}<${value};${i}++) {`)}
        }
        return out
    } else if (line.indexOf("end()") != -1) {
        line = line.replaceAll("end()",'}')
    }
    return {"exports":line};
}