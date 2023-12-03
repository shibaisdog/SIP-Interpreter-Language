module.exports = (line) => {
    line = line.replaceAll('\n','')
    var after_replace = []
    let out = ""
    let enter = line.split(";")
    for (let i in enter) {
        var license = enter[i]
        const _type_const = require('./interpreter/type/const.js')(license) // TYPE ~6
        license = _type_const.exports
        const _type_var = require('./interpreter/type/var.js')(license)
        license = _type_var.exports
        const _type_let = require('./interpreter/type/let.js')(license)
        license = _type_let.exports
        const _lop = require('./interpreter/lop.js')(license) // LOOP ~2
        license = _lop.exports
        const _run = require('./interpreter/run.js')(license) // RUN ~2
        license = _run.exports
        const _fun = require('./interpreter/fun.js')(license) // FUN ~2
        license = _fun.exports
        const _if = require('./interpreter/if.js')(license) // IF ~2
        license = _if.exports
        const _elif = require('./interpreter/elif.js')(license) // IF ~2
        license = _elif.exports
        const _else = require('./interpreter/else.js')(license) // IF ~2
        license = _else.exports
        out += license
    }
    for (let i in after_replace) {out = out.replaceAll(after_replace[i].b,after_replace[i].a)}
    out = require('./interpreter/print.js')(out) // PRINT ~1
    out = require('./interpreter/type/read.js')(out) // TYPE? ~1
    return out
}
