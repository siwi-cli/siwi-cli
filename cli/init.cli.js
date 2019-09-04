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

class InitCli {
    async init(templateName, saveName) {
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


        const name = await this.question('Name for the project :', saveName)
        const version = await this.question('Version for the project :', '0.0.1')
        const description = await this.question('Description for the project: ', `A project create by siwi-cli using template: ${templateName}`)
        const author = await this.question('Author for the project:', 'siwilizhao@gmail.com')
        let cmd = await this.question('use npm or yarn ? (npm/yarn default yarn) :', 'yarn')

        /* 兼容windows */
        if (os.platform() == 'win32') {
            cmd += '.cmd'
        }

        try {
            const options = {
                overwrite: true
            }
            const files = await this.copyFiles(from, to, options)
            if (!files) {
                return false;
            }
            for (const file of files) {
                console.log(`create file :${file}`);
            }
            /* create package.json */
            await this.createPackageJson([name, version, description, author], path.resolve(to, 'package.json'))
            /* create README.md */
            await this.createReadMeMd([name, description], path.resolve(to, 'README.md'))
            /* create CHANGELOG.md */
            await this.createChangeLogMd([name, version, description], path.resolve(to, 'CHANGELOG.md'))
            /* install dependencies */
            await this.installDependencies(cmd, dependencies[templateName], to)
            /* install devDependencies */
            await this.installDevDependencies(cmd, devDependencies[templateName], to)
        } catch (error) {
            console.trace(error)
        }
    }

    /**
     * copy files
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} from
     * @param {*} to
     * @param {*} options
     * @returns
     * @memberof InitCli
     */
    async copyFiles(from, to, options) {
        return new Promise((resolve, reject) => {
            cpr(from, to, options, (err, files) => {
                if (err) {
                    reject(err)
                }
                resolve(files)
            })
        }).catch(err => {
            return false
        })
    }

    /**
     * createPackageJson
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} content
     * @param {*} saveName
     * @returns
     * @memberof InitCli
     */
    async createPackageJson(content, saveName) {
        const [name, version,description,author] = data
        const content =
`
{
    name: ${name},
    version: ${version},
    description: ${description},
    main: 'index.js',
    scripts: {
        test: 'mocha test'
    },
    keywords: [],
    author:  ${author},,
    license: 'MIT'
}
`
        fs.writeFileSync(content, saveName)
        return true
    }

    /**
     * createReadMeMd
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} data
     * @param {*} saveName
     * @returns
     * @memberof InitCli
     */
    async createReadMeMd(data, saveName) {
        const [name, description] = data
        const content =
`

# ${name}

> ${description}

`
        fs.writeFileSync(content, saveName)
        return true
    }

    /**
     * createChangeLogMd
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} data
     * @param {*} saveName
     * @returns
     * @memberof InitCli
     */
    async createChangeLogMd(data, saveName) {
        const [name, des] = data
        const content =
`
# ${name} changelog

## ${version}

- ${description}

`
        fs.writeFileSync(content, saveName)
        return true
    }

    /**
     * installDependencies
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} cmd
     * @param {*} dependencies
     * @param {*} cwd
     * @returns
     * @memberof InitCli
     */
    async installDependencies(cmd, dependencies, cwd) {
        if (!dependencies) {
            return false
        }

        const ls = spawn(cmd, ['add', ...dependencies], {
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
    }
    /**
     * installDependencies
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} cmd
     * @param {*} devDependencies
     * @param {*} cwd
     * @returns
     * @memberof InitCli
     */
    async installDevDependencies(cmd, devDependencies, cwd) {
        if (!devDependencies) {
            return false
        }
        const ls = spawn(cmd, ['add', ...devDependencies, '-D'], {
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
    }

    /**
     * question
     * 
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @param {*} question
     * @param {*} defaultAnswer
     * @returns
     * @memberof InitCli
     */
    async question(question, defaultAnswer) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        const answer = await new Promise((resolve, reject) => {
            rl.question(question, answer => {
                if (['npm', 'yarn'].includes(answer)) {
                    resolve(answer)
                } else {
                    reject(false)
                }
            })
        }).catch(err => {
            return defaultAnswer
        })
        rl.close()
        return answer
    }
}

module.exports = InitCli