/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-09-05 09:18:25
 * @modify date 2019-09-05 09:18:25
 * @desc [description]
 */
const config = require('../config')
class ListCli {
    async list() {
        console.table(config.templates)
    }
}
module.exports = ListCli