/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-08-27 21:28:28
 * @modify date 2019-08-27 21:28:28
 * @desc [dev db config for this project]
 */

const path = require('path')
module.exports = {
    redis: {
        port: 6379,          // Redis port
        host: '192.168.0.169',   // Redis host
        family: 4,           // 4 (IPv4) or 6 (IPv6)
        password: '',
        db: 0
    },
    sqlite: path.resolve('storage', 'db', 'sqlite3.db'),
    mysql: {},
    mongodb: {
        url: 'mongodb://192.168.0.169:27017', options: { auth: { user: 'root', password: '123456' }, useNewUrlParser: true, authMechanism: 'SCRAM-SHA-256' }
    },
    rabbitmq: { hostname: '192.168.0.169', port: 5672, username: 'root', password: '123456' },
}