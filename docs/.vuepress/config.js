const head = require('./head')
const nav = require('./nav')
const plugin = require('./plugin')

module.exports = {
    port: '7777',
    title: 'Charsen',
    titleHide: true,
    description: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. (John3:16 KJV)',
    head: head,
    themeConfig: {
        repo: 'https://github.com/charsen/vuepress-skeleton.git',
        repoLabel: 'github',
        logo: '/images/logo-en.png',
        nav: nav,
        docsDir: 'docs',
        sidebarDepth: 2,
        editLinks: true,
        editLinkText: 'Git EditLink',
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        displayAllHeaders: true,
    },
    plugins: plugin,
    extraWatchFiles: [
      '.vuepress/head.js',
      '.vuepress/nav.js',
    ],
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    dest: './dist'
}
