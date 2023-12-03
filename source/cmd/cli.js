#!/usr/bin/env node
const {program} = require('commander');
const {trueC,falseC} = require('../SIP.js')
program
    .version('0.0.1','-v, --version')
    .name('cli');
program
    .command('cf <run_after_compiler___true_or_false>')
    .description('파일을 컴파일러합니다.')
    .option('-p, --filepath [filepath]','파일 경로를 입력하세요','.')
    .option('-f, --filename [filename]','파일 이름을 입력하세요','.')
    .action((type,options) => {
        if (type == 'cf') {return 0;}
        if (type == "true") {trueC((options.filepath).replaceAll("@"," "),options.filename)}
        else {falseC((options.filepath).replaceAll("@"," "),options.filename)}
    })
    .parse(process.argv);
program
    .command('*',{noHelp:true})
    .action(()=>{
        console.log('해당 명령어를 찾을 수 없습니다.')
        program.help();
    });
program
    .parse(process.argv);
//npx cli cf true -p C:\\Users\\yummy\\OneDrive\\바탕@화면\\SIP\\workspace -f index.sp