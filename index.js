#!/usr/bin/env node
const program = require('commander');

(async () => {
    program
        .version(require('./package.json').version, '-v --version')
        .option('-i, --init', 'init a nodejs project use siwi-template')
        .option('-c, --create', 'create file by siwi-cli')
        .option('-s, --ssh-keygen', 'gen ssh key for git github')
        .option('-r, --rsa', 'gen rsa private.pem  public.pem')
        .option('-t, --time', 'time for siwi-cli')
        .option('-o, --crypto', 'crypto for siwi-cli')
        .option('-g, --gitignore', 'gen .gitignore for nodejs project by siwi-cli')
        .option('-e, --dotenv', 'gen .env for nodejs project by siwi-cli')
        .option('-f, --file', 'gen file for nodejs project by siwi-cli')
        .option('-l, --list', 'list templates for siwi-cli')
        .parse(process.argv)

    if (program.init) {
        const [templateName, saveName] = process.argv.slice(3)
        if (!!templateName) {
            const InitCli = require('./cli/init.cli')
            const initCli = new InitCli()
            await initCli.init(templateName, saveName)
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
    /* 和时间相关的操作 */
    if (program.crypto) {
        const args = process.argv.slice(3)
        const crypto = require('./cli/crypto')
        crypto(args)
    }
    /* 和文件相关的操作 */
    if (program.file) {
        const args = process.argv.slice(3)
        const FileCli = require('./cli/file.cli')
        const fileCli = new FileCli()
        fileCli.config(args)
    }
    if (program.list) {
        const ListCli = require('./cli/list.cli')
        const listCli = new ListCli()
        await listCli.list()
    }
})();