/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-23 16:12:35
 * @modify date 2019-05-23 16:12:35
 * @desc [init.js]
 */

const os = require('os')
const fs = require('fs')
const cpr = require('cpr')
const path = require('path')
const debug = require('debug')
const config = require('../config')
const readline = require('readline')
const Promise = require('bluebird')
const {
    spawn
} = require('child_process')
const CLI_PATH = path.dirname(__filename)
const SIWI_PATH = path.dirname(CLI_PATH)
const TEMPLATE_PATH = path.resolve(SIWI_PATH, 'templates')


module.exports = function init(templateName, saveName) {
    const from = path.resolve(TEMPLATE_PATH, templateName)
    const to = path.resolve(process.cwd(), saveName ? saveName : templateName)
    if (!fs.existsSync(from)) {
        debug.log(`not support template ${templateName}`)
        return false
    }
    const {
        dependencies,
        devDependencies
    } = config


    cpr(from, to, {
        overwrite: true
    }, async (err, files) => {
        if (err) {
            console.trace(err)
            return false
        } else {
            for (const file of files) {
                console.log(`create file :${file}`);
            }

            const package = {
                name: saveName,
                version: '0.0.1',
                description: '',
                main: 'index.js',
                scripts: {
                    test: 'mocha test'
                },
                keywords: [],
                author: '',
                license: 'MIT'
            }

            /* create packages.json */
            fs.writeFileSync(path.resolve(to, 'package.json'), JSON.stringify(package))
            /* create README.md CHANGELOG.md */

            /* install dependencies */
            const cwd = path.resolve(process.cwd(), saveName)

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            })
            let cmd = await new Promise((resolve, reject) => {
                rl.question('use npm or yarn ? (npm/yarn default yarn) :', answer => {
                    if (['npm', 'yarn'].includes(answer)) {
                        resolve(answer)
                    } else {
                        resolve('yarn')
                    }
                })
            })
            rl.close()

            /* 兼容windows */
            if (os.platform() == 'win32') {
                cmd += '.cmd'
            }

            /* install dependencies */
            const ls = spawn(cmd, ['add', ...dependencies[templateName]], {
                cwd: cwd
            })
            ls.stdout.on('data', (data) => {
                console.log(`${data}`);
            });

            ls.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });

            ls.on('close', (code) => {
                console.log(`子进程退出码：${code}`);
            });

            /* install devDependencies */
            const lsd = spawn(cmd, ['add', ...devDependencies[templateName], '-D'], {
                cwd: cwd
            })
            lsd.stdout.on('data', (data) => {
                console.log(`${data}`);
            });

            lsd.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });

            lsd.on('close', (code) => {
                console.log(`子进程退出码：${code}`);
            });

        }
    })
}