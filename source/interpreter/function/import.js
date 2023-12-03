module.exports = (line) => {
    if (line.indexOf("import") != -1) {
        if (line.indexOf("as") != -1) {
            const module = line.substring(line.indexOf("import")+6,line.lastIndexOf("as")).replaceAll(" ","")
            const name = line.substring(line.indexOf("as")+2).replaceAll(" ","")
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("import")),`import ${name} from "${module}"`)}
        } else {
            const module = line.substring(line.indexOf("import")+6).replaceAll(" ","")
            var out = {"exports":line.replaceAll(line.substring(line.indexOf("import")),`import ${module} from "${module}"`)}
        }
        return out
    }
    return {"exports":line};
}