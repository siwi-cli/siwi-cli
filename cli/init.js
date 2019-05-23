/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-23 16:12:35
 * @modify date 2019-05-23 16:12:35
 * @desc [init.js]
 */
module.exports = function init(templateName, saveName) {
    const { templates } = require('../config')
    if (Object.keys(templates).includes(templateName)) {
        const template= templates[templateName]
        const { spawn } = require('child_process')
        const { name, git } = template
        saveName ? saveName: name
        const ls = spawn('git', ['clone', `${git}`, saveName], {cwd: process.cwd()})
        ls.stdout.on('data', (data) => {
            console.log(`${data}`)
        })
        ls.stderr.on('data', (data) => {
            console.log(`init stderr: ${data}`)
        })
        ls.on('close', code => {
            // console.log(`init 退出码：${code}`)
            if (code == 0) {
                spawn('rm', ['-rf', `${saveName}/.git`], {cwd: process.cwd()})
            }
        })
    } else {
        console.log(`the ${templateName} is not support yet! `)
    }
}