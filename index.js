#!/usr/bin/env node
const program = require('commander')

program
    .version(require('./package.json').version, '-v --version')
    .option('-i, --init', 'init a nodejs project use siwi-template')
    .option('-c, --create', 'create file by siwi-cli')
    .option('-s, --ssh-keygen', 'gen ssh key for git github')
    .option('-r, --rsa', 'gen rsa private.pem  public.pem')
    .option('-t, --time', 'time for siwi-cli')
    .parse(process.argv)

if (program.init) {
    const [templateName, saveName] = process.argv.slice(3)
    if (!! templateName) {
        const init = require('./cli/init')
        init(templateName, saveName)
    }
}

/* rsa 生成 rsa指定公钥私钥 */
if (program.rsa) {
    require('./cli/rsa')
}

/* 和时间相关的操作 */
if (program.time) {
    const args = process.argv.slice(3)
    const time = require('./cli/time')
    time(args)
}