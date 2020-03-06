module.exports = {
    port: '7777',
    title: 'Charsen',
    titleHide: true,
    description: 'Crater is an open-source app made in Laravel, VueJS & React Native that helps you track expenses, payments & create professional invoices & estimates',
    head: require('./head'),
    themeConfig: {
        repo: 'https://github.com/charsen/vuepress-skeleton.git',
        repoLabel: 'github',
        logo: '/images/logo-en.png',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        editLinks: true,
        editLinkText: 'Git EditLink',
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        displayAllHeaders: true,
    },
    plugins: [
        // you can use this plugin multiple times
        [
          'vuepress-plugin-container',
          {
            type: 'wrapper',
            defaultTitle: '',
          },
        ]
    ],
    extraWatchFiles: [
      '.vuepress/head.js',
      '.vuepress/nav.js',
      '.vuepress/sidebar.js'
    ],
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    dest: './dist'
}
