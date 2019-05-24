/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-05-24 11:32:24
 * @modify date 2019-05-24 11:32:24
 * @desc [crypto]
 */

module.exports = function crypto(args) {
    const target = args[0];
    if (!!target) {
        const data = [
            {title: 'md5', param: target, value: md5(target) },
            {title: 'sha256', param: target, value: sha256(target) },
            {title: 'base64', param: target, value: base64(target) },
        ]
        console.table(data)
    }
}

function md5(target) {
    const _crypto = require('crypto')
    return _crypto.createHash('md5').update(target).digest('hex')
}

function sha256(target) {
    const _crypto = require('crypto')
    return _crypto.createHash('sha256').update(target).digest('hex')
}

function base64(target) {
    return Buffer.from(target).toString('base64')
}