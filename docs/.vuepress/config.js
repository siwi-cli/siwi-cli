module.exports = {
    title: 'Siwi Cli',
    description: 'a cli for nodejs developer',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Github', link: 'https://github.com/siwi-cli' },
        ],
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: {
            '/siwi-cli/': [
                '',
                'install'
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': './public/images'
            }
        }
    }
}