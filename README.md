<h1 align="center">GeekApk Introduction 极安静态页面</h1>

<p align="center"><a href="https://geekapk-r.github.io/geekapk.org/">预览</a> · <a href="https://geekapk.org">去极安网站看看</a> · <a href="https://status.geekapk.org">Status</a> · <a href="https://web.geekapk.org">Web</a> · <a href="https://t.me/geekapk_bot">Register</a></p>

## 介绍 | Introduction

GeekApk 的静态页面们, 它们是主页, 文档, etc.

目前, __geekapk.org__ 主页使用 [ERB](https://ruby-lang.org) 模板自动生成, [Travis CI](https://travis-ci.org) 自动部署到 [GitHub Pages](https://pages.github.com) 服务上.

这些页面的内容会包含介绍, 下载链接, Web 版链接, 文档链接(到 GitHub 上的 Wiki) 等

__geekapk.org__ 实际上会被 [CloudFlare](https://cloudflare.com) 解析代理提速, 感谢这些公共项目的支持!

## 内容 | Contents

这些是相应的 _ERB_ 模板内容

+ __/__ 主页 [/templates/index.rhtml](./templates/index.rhtml)
+ __/about__ 关于页面 [/templates/about.rhtml](./templates/about.rhtml)
+ __/book__ 书 [/templates/about.rhtml](./templates/book.rhtml)
+ __/dev__ 开发者文档 [/templates/dev.rhtml](./templates/dev.rhtml)

## 非静态服务

GeekApkR 不再提供 Wiki, Analytics 等非静态服务, 理由是对主服务没有太大帮助.

Learn More: [早期 GeekPages 链接](https://github.com/geekapk/GeekPage/blob/master/README.md)

## 图标 | Logo

GeekApk 有两种图标, 分别是 __@pandecheng__ 制作的平滑图标与 __@duangsuse__ 的扁平图标:

__@pandecheng__ 并没有写明图片的著作权信息, 如果要在不寻常之处使用请咨询 [@pandecheng](https://github.com/pandecheng36)

Symbolic 使用了 [Matrial Design Icons](https://github.com/google/material-design-icons) 的 _ic_android_ 图标, 许可 __Apache-2.0__, 图标本身许可也为同一许可证

<p align="center">
    <img alt="pdc" src="https://geekapk.org/bitmap/geekapk-128.png" />
    <img alt="dse" src="https://geekapk.org/bitmap/symbolic/geekapk-128.png" />
</p>

图标在 [bitmap](./bitmap) 目录下, release 里有一个 [专门](https://github.com/geekapk-r/geekapk.org/releases/tag/bitmap) 的图标发布

## 许可证 | License

```plain
Copyright (C) 2018 geekapk contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
```
