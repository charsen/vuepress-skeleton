# Plugins

配置文件 `.vuepress/plugin.js` 及 `.vuepress/secretKey.js`

- vuepress-plugin-auto-sidebar
- @vuepress/back-to-top
- @vuepress/medium-zoom
- @vuepress/google-analytics
- @vuepress/last-updated

## .vuepress/secretKey.js

```js
module.exports = secretKey = {
    appId: '',
    appKey: '',
    ga: '',
    googleSearchConsole: '',
}
```

## .vuepress/plugin.js

```js
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

```
