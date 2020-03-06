# Vuepress

VuePress 是一个 `静态网站生成器`，使用它我们一方面可以专注输出技术类文档，也可以使用基于Vue的开发方式来开发我们其它的静态网站。
每一个由 VuePress 生成的静态页面都是经过服务端渲染(SSR)而来，因此由 VuePress 生成的页面在加载性能和搜索引擎优化(SEO)上有很明显的优势。

## 组成部分
通常而言，一个由 VuePress 生成的网站，它是用 `Vue`、`Vue-router`、`Webpack` 以及利用服务端渲染(`SSR`)而来，它不仅支持 Vue 组件的写法，还内置 `Stylus` 语法。

## 安装
### 全局安装(推荐)
通常而言，全局安装 VuePress 会非常省心，可以通过如下命令进行全局安装
```sh
$ npm install -g vuepress
```

### 本地安装
区别于全局安装，本地安装会把 `npm` 包安装在本项目上，生成一个叫 `node_modules` 目录，可以通过如下命令进行本地安装（需同时安装 `vuepress` 和 `webpack-dev-middleware` ）
```sh
$ npm install vuepress webpack-dev-middleware --save-dev
```

## 首页配置说明
```md
home: true
heroText: God bless You, God love You
heroImage: /images/logo.png
actionText: Get Start â†’
actionLink: /guide/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright Â© 2020 Charsen

```

在首页的YAML格式配置中，我们填写了一些配置，下面我们将详细描述每一个配置的具体含义

- `home:true`：标记此页面是否为首页
- `lang:zh-CN`：表示本页面的语言为zh-CN(简体中文)
- `heroText`: 首页的标题内容
- `heroImage`: 首页的标题图片，其中全路径为 `docs/.vuepress/public/logo.jpg`，默认去 `public` 目录下找静态资源
- `actionText`: 首页跳转按钮的内容
- `actionLink`: 首页跳转按钮挑战的路径，其中全路径为`docs/interview/readme.md`，默认 `readme` 命名的文件可以省略不写链接的后面内容，省略后的链接如上
- `features`: 表明首页的特征，固定的格式为 `title` + `details`，以三栏流式布局的方式展示
`footer`: 为底部内容，与普通的网页一样，我们可以在 `footer` 里面写版权信息


## Emoji :100: :rocket:

在 `.md` 文件中，我们可以使用Emoji表情，你也可以访问 [Emoji Search](https://emoji.muan.co/) 来查询你喜欢的Emoji表情，访问 [Common Emoji](https://gitmoji.carloscuesta.me/) 来访问常用的 `Emoji`，一个 `Emoji` 可以是这样定
```md
#  :tada:
:100: :rocket:
```

## 自动生成目录
我们有时候希望根据标题自动生成目录，可以使用 `[[toc]]` 来输出我们的目录，它默认只列举 `h2` 标题和 `h3` 标题
```md
[[toc]]
```


## 使用内置组件

### 外部链接
下面是一个外部链接的配置，它链接到百度
```md
[百度一下](https://www.baidu.com)
```

### Badge(角标) <Badge text="cool" vertical="top" type="error"/>

内置组件Badge有三个属性需要传递：

- `text`：它指明了角标的内容
- `type`：同自定义容器类似，它有三种不同的类型，分别是 `tip` 、`warn` 和 `error`，默认是 `tip`
- `vertical`：它指明了角标同内容的对齐方式，有两个值，分别是 `top` 和 `middle`，默认是 `top`

Vue <Badge text="2.5.0+"/>

Vuex <Badge text="beta" type="warn" vertical="top"/>


```md
# Vue <Badge text="2.5.0+"/>
# Vuex <Badge text="beta" type="warn" vertical="top"/>
# Vue-Resource<Badge text="废弃" vertical="middle" type="error"/>
```

::: tip
以上内容多数转载自 [VuePress](https://wangtunan.github.io/blog/vuepress)
:::

## Resources

### VuePress Comminity
[Vist](https://vuepress.github.io/zh/) the page.
