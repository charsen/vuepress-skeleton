const secretKey = require('./secretKey')
const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).format('LLLL')
    },
    "vuepress-plugin-auto-sidebar": {
        titleMode: "uppercase"
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {},
    '@vuepress/google-analytics': {
        'ga': secretKey.ga
    },
}
