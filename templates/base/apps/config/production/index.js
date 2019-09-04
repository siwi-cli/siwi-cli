/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-08-27 21:30:16
 * @modify date 2019-08-27 21:30:16
 * @desc [prod config]
 */

module.exports = {
    rabbitmq: require('./rabbitmq'),
    constant: require('./constant'),
    cache: require('./cache'),
    db: require('./db')
}