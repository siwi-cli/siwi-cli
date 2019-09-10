/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-09-07 12:37:44
 * @modify date 2019-09-07 12:37:44
 * @desc [config for siwi-cli]
 */
module.exports = {
    templates: {
        'web': {
            name: 'siwi-template-web',
            git: 'git@github.com:siwi-cli/siwi-template-web.git',
            type: 'built-in'
        },
        'api': {
            name: 'siwi-template-api',
            git: 'git@github.com:siwi-cli/siwi-template-api.git',
            type: 'built-in'
        },
        'pkg': {
            name: 'siwi-template-pkg',
            git: 'git@github.com:siwi-cli/siwi-template-pkg.git',
            type: 'built-in'
        },
        'vue': {
            name: 'siwi-template-vue',
            git: 'git@github.com:siwi-cli/siwi-template-vue.git',
            type: 'built-in'
        },
        'grpc': {
            name: 'siwi-template-grpc',
            git: 'git@github.com:siwi-cli/siwi-template-grpc.git',
            type: 'built-in'
        },
        'mixin': {
            name: 'siwi-template-mixin',
            git: 'git@github.com:siwi-cli/siwi-template-mixin.git',
            type: 'built-in'
        },
        'multi': {
            name: 'siwi-template-multi',
            git: 'git@github.com:siwi-cli/siwi-template-multi.git',
            type: 'built-in'
        },
        'spider': {
            name: 'siwi-template-spider',
            git: 'git@github.com:siwi-cli/siwi-template-spider.git',
            type: 'built-in'
        },
        'parcel': {
            name: 'siwi-template-parcel',
            git: 'git@github.com:siwi-cli/siwi-template-parcel.git',
            type: 'built-in'
        },
        'gateway': {
            name: 'siwi-template-gateway',
            git: 'git@github.com:siwi-cli/siwi-template-gateway.git',
            type: 'built-in'
        },
        'service': {
            name: 'siwi-template-service',
            git: 'git@github.com:siwi-cli/siwi-template-service.git',
            type: 'built-in'
        },
    },
    files: {
        controller: {
            type: 'js',
            template: ''
        }
    },
    dependencies: {
        base: ['sequelize', 'mysql2', 'sqlite', 'mongoose', 'amqplib', 'ioredis', 'got', 'cheerio', 'iconv-lite', 'siwi-sleep', 'siwi-mkdirs'],
        pkg: [],
        spider: ['ioredis', 'got', 'cheerio', 'iconv-lite', 'siwi-sleep', 'siwi-mkdirs'],
        docs: [],
        web: ['koa', 'koa-logger', 'koa-router', 'koa-bodyparser', 'koa-static', 'koa2-cors', 'koa-session', 'got', 'pug', 'ejs', 'ioredis', 'sequelize', 'mongoose'],
        api: ['koa', 'koa-logger', 'koa-router', 'koa-bodyparser', 'koa-static', 'koa2-cors', 'koa-session', 'got', 'ioredis', 'sequelize', 'mongoose', 'mysql2', 'sqlite'],
        gateway: ['koa', 'koa-logger', 'koa-router', 'koa-bodyparser', 'koa-static', 'koa2-cors', 'koa-session', 'got', 'ioredis', 'sequelize', 'mongoose', 'mysql2', 'sqlite'],
    },
    devDependencies: {
        base: ['mocha', 'chai', '@types/node', '@types/mongoose', '@types/sequelize', 'vuepress'],
        pkg: ['mocha', 'chai', '@types/node', 'vuepress'],
        spider: ['mocha', 'chai', '@types/node', 'vuepress'],
        docs: ['vuepress'],
        web: ['mocha', 'chai', '@types/node', '@types/mongoose', '@types/sequelize', 'vuepress'],
        api: ['mocha', 'chai', '@types/node', '@types/mongoose', '@types/sequelize', 'vuepress'],
        gateway: ['mocha', 'chai', '@types/node', '@types/mongoose', '@types/sequelize', 'vuepress'],
    }
}