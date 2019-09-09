/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-08-27 21:31:14
 * @modify date 2019-08-27 21:31:14
 * @desc [configs for project]
 * @notice [ on mac and linux export NODE_ENV=development and on windows cmd set NODE_ENV=development on powershell $env:NODE_ENV='development']
 */
module.exports = process.env.NODE_ENV == 'development' ? require('./development') : require('./production');