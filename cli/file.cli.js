/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-08-26 14:48:01
 * @modify date 2019-08-26 14:48:01
 * @desc [file cli for siwi-cli]
 */

const args = process.argv.splice(2)
const fs = require('fs')
const cpr = require('cpr')
const path = require('path')
const CLI_PATH = path.dirname(__filename);
const SIWI_PATH = path.dirname(CLI_PATH);
const TEMPLATE_PATH = path.resolve(SIWI_PATH, 'templates')
class FileCli {
    config() {

        const from = `${path.resolve(TEMPLATE_PATH, 'base')}`
        const to = `${path.resolve('test')}`

        if (!fs.existsSync(from)) {
            console.log();
            
            return false
        }
        cpr(from, to, {
            deleteFirst: true, //Delete "to" before
            overwrite: true, //If the file exists, overwrite it
            confirm: true
        }, (error, files) => {
            if (error) {
                console.trace(error)
                return false
            }
            for (const file of files) {
                console.log(`create file：${file}`);  
            }
            
        })
        
    }
}

module.exports = FileCli