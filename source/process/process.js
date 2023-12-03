const fs = require('fs')
const child_process = require('child_process')
const spawn = child_process.spawn;
const Memory_Collector_Value = {"rss":0,"heapUsed":0,"heapTotal":0,"count":0}
const start = (file) => {
    var pack = 0
    for (let i in file) {
        if (!fs.existsSync(file[i])) {throw new Error('File does not exist : '+file[i])}
        const Process = "ts-node.cmd"
        const SCRIPT = Number(new Date())
        const Memory_Collector = setInterval(() => {
            const Memory = process.memoryUsage()
            Memory_Collector_Value.rss += Memory.rss
            Memory_Collector_Value.heapUsed += Memory.heapUsed
            Memory_Collector_Value.heapTotal += Memory.heapTotal
            Memory_Collector_Value.count += 1
        },1)
        const child = spawn(Process,[file[i]]);
        child.stdout.on("data", (data) => {console.log(data.toString())});
        child.stderr.on("data", (data) => {
            let error_message = (data.toString()).replace(/\n/gi,'').replace(/\r/gi,'')
            if (error_message.indexOf('Cannot find module') != -1) {
                pack = 1
                error_message = error_message.substring(error_message.indexOf('Cannot find module')+'Cannot find module'.length)
                error_message = error_message.substring(0,error_message.indexOf('Require stack:'))
                const module = error_message.replace(/'/gi,'')
                var cmd = 'yarn.cmd'
                var npm = 'npm.cmd'
                const yarn = spawn(cmd,["--version"]);
                yarn.stderr.on("data",(data) => {
                    let yarn_error_message = (data.toString()).replace(/\n/gi,'').replace(/\r/gi,'')
                    if (yarn_error_message.indexOf('Debugger attached.') == -1 && yarn_error_message.indexOf('Waiting for the debugger to disconnect...')) {
                        console.log("[AUTO package install] Error: > yarn was not found | Start Downloading yarn...")
                        const install_yarn = spawn(npm,["install","yarn"])
                        install_yarn.stdout.on("data",(data) => {console.log(data.toString())});
                        install_yarn.on("exit", () => {
                            console.log("[AUTO package install] > yarn Download Complete, Rebooting...")
                            start(file)
                        });
                    }
                });
                yarn.stdout.on("data", (data) => {
                    const yarnv = (data.toString().replace(/\n/gi,'').replace(/\r/gi,'').replace(/\ /gi,''))
                    console.log(`[AUTO package install] process:${Process} ${process.version} / installer:${cmd} v${yarnv}> ${module.replace(/ /gi,'')}`)
                    const spawn_install = spawn(cmd,["add",module.replace(/ /gi,'')]);
                    spawn_install.stdout.on("data", (data) => {
                        const yarn_install_stdout = data.toString()
                        if (yarn_install_stdout.indexOf('Done') != -1 || yarn_install_stdout.indexOf('/') != -1) {console.log(yarn_install_stdout)}
                    });
                    spawn_install.stderr.on("data", (data) => {
                        const yarn_install_stderr = data.toString()
                        if (yarn_install_stderr.indexOf('No license field') != -1 && yarn_install_stderr.indexOf('warning package-lock.json found.') != -1)
                        {console.error(data.toString())}
                    });
                    spawn_install.on("exit", () => {start(file)});
                });
            } else {
                console.error(error_message)
                return 0
            }
        });
        child.on("exit", () => {
            clearInterval(Memory_Collector)
            const Memory_Collector_Value_AR = {
                "rss.MB" : (Memory_Collector_Value.rss/Memory_Collector_Value.count)/1024/1024,
                "heapUsed.MB" : (Memory_Collector_Value.heapUsed/Memory_Collector_Value.count)/1024/1024,
                "heapTotal.MB" : (Memory_Collector_Value.heapTotal/Memory_Collector_Value.count)/1024/1024
            }
            if (pack == 0) {console.log("------SCRIPT EXIT------\nRun-Time : "+(Number(new Date())-SCRIPT).toString()+"ms\nMemory : "+Memory_Collector_Value_AR['heapUsed.MB']+"MB")}
            return 0
        });
    }
}
module.exports = start