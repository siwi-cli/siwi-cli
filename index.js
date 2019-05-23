#!/usr/bin/env node
const program = require('commander')

program
    .version(require('./package.json').version, '-v --version')
    .option('-i, --init', 'init a nodejs project use siwi-template')
    .option('-c, --create', 'create file by siwi-cli')
    .option('-s, --ssh-keygen', 'gen ssh key for git github')
    .option('-r, --rsa', 'gen rsa private.pem  public.pem')
    .parse(process.argv)

if (program.init) {
    const [templateName, saveName] = process.argv.slice(3)
    if (!! templateName) {
        const init = require('./cli/init')
        init(templateName, saveName)
    }
}

if (program.rsa) {
    require('./cli/rsa')
}