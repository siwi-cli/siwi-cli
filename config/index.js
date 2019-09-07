module.exports = {
    templates: {
        'web': {
            name: 'siwi-template-web',
            git: 'git@github.com:siwi-cli/siwi-template-web.git'
        },
        'api': {
            name: 'siwi-template-api',
            git: 'git@github.com:siwi-cli/siwi-template-api.git'
        },
        'pkg': {
            name: 'siwi-template-pkg',
            git: 'git@github.com:siwi-cli/siwi-template-pkg.git'
        },
        'vue': {
            name: 'siwi-template-vue',
            git: 'git@github.com:siwi-cli/siwi-template-vue.git'
        },
        'grpc': {
            name: 'siwi-template-grpc',
            git: 'git@github.com:siwi-cli/siwi-template-grpc.git'
        },
        'mixin': {
            name: 'siwi-template-mixin',
            git: 'git@github.com:siwi-cli/siwi-template-mixin.git'
        },
        'multi': {
            name: 'siwi-template-multi',
            git: 'git@github.com:siwi-cli/siwi-template-multi.git'
        },
        'spider': {
            name: 'siwi-template-spider',
            git: 'git@github.com:siwi-cli/siwi-template-spider.git'
        },
        'parcel': {
            name: 'siwi-template-parcel',
            git: 'git@github.com:siwi-cli/siwi-template-parcel.git'
        },
        'gateway': {
            name: 'siwi-template-gateway',
            git: 'git@github.com:siwi-cli/siwi-template-gateway.git'
        },
        'service': {
            name: 'siwi-template-service',
            git: 'git@github.com:siwi-cli/siwi-template-service.git'
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
    },
    devDependencies: {
        base: ['mocha', 'chai', '@types/node', '@types/mongoose', '@types/sequelize', 'vuepress'],
        pkg: ['mocha', 'chai', '@types/node', 'vuepress'],
    }
}