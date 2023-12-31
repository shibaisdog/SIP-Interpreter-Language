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
        const _import = require('./interpreter/function/import.js')(license) // IMPORT ~2
        license = _import.exports
        const _lop = require('./interpreter/loop/lop.js')(license) // LOOP ~2
        license = _lop.exports
        const _run = require('./interpreter/loop/run.js')(license) // RUN ~2
        license = _run.exports
        const _cls = require('./interpreter/function/cls.js')(license) // CLS ~1
        license = _cls.exports
        const _init = require('./interpreter/function/init.js')(license) // INIT ~1
        license = _init.exports
        const _fun = require('./interpreter/function/fun.js')(license) // FUN ~2
        license = _fun.exports
        const _if = require('./interpreter/if/if.js')(license) // IF ~2
        license = _if.exports
        const _elif = require('./interpreter/if/elif.js')(license) // ELIF ~2
        license = _elif.exports
        const _else = require('./interpreter/if/else.js')(license) // ELSE ~2
        license = _else.exports
        const _throw = require('./interpreter/error/throw.js')(license) // THROW ~2
        license = _throw.exports
        const _catch = require('./interpreter/error/catch.js')(license) // CATCH ~2
        license = _catch.exports
        out += license
    }
    for (let i in after_replace) {out = out.replaceAll(after_replace[i].b,after_replace[i].a)}
    out = require('./interpreter/function/print.js')(out) // PRINT ~1
    out = require('./interpreter/type/read.js')(out) // TYPE? ~1
    out = require('./interpreter/if/not.js')(out) // NOT ~1
    out = require('./interpreter/if/and.js')(out) // AND ~1
    out = require('./interpreter/if/or.js')(out) // OR ~1
    out = require('./interpreter/error/try.js')(out) // TRY ~1
    out = require('./interpreter/error/fialy.js')(out) // FIALY ~1
    return out
}