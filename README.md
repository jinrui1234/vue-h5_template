<!--
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-10-11 20:15:18
 * @FilePath: /vue3-ts-h5-template/README.md
 * @Description:
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
-->

<!-- https://www.renshengdaoshi.com/
{
"name": "47.103.197.242",
"host": "47.103.197.242",
"protocol": "sftp",
"port": 22,
"username": "root",
"remotePath": "/mnt/service/html/renshengdaoshi",
"uploadOnSave": false,
"useTempFile": false,
"openSsh": false
}

{
"name": "8.133.245.132",
"host": "8.133.245.132",
"protocol": "sftp",
"port": 22,
"username": "root",
"remotePath": "/mnt/service/html/renshengdaoshi",
"uploadOnSave": false,
"useTempFile": false,
"openSsh": false
} -->

**🌱 基于 Vue3 全家桶、TS/JS、Vite 构建工具，开箱即用的移动端项目基础模板**

- [x] ⚡ Vue3 + Vite5 + Vuex
- [x] 🍕 TypeScript
- [x] ✨ 全局环境变量
- [x] 🎨 Vant4 组件库
- [x] 🎊 vw 窗口适配
- [x] 🌀 Tailwindcss 原子类框架
- [x] 🌈 Pettier+ ESLint 统一代码风格
- [x] 👏 页面标题自动切换
- [] 🚀 自动化部署
- [x] 🕹 Mock 实现数据模拟
- [x] 🎁 封装Axios请求库
- [x] 🧭 封装Utils常用工具函数
- [x] 🍕 打包资源GZIP压缩
- [x] 🏀 自定义全屏加载动画 loading
- [x] 🧸 浏览器回退Keep-Alive 页面状态保持
- [x] 🌈 主题切换

## 目录结构

```
├── dist
├── public
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── layout
│   ├── types
│   ├── router
│   ├── stores
│   ├── styles
│   ├── utils
│   ├── views
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├──  .env
├──  .env.development
├──  .env.development-fix
├──  .env.production
├──  .gitignore
├──  index.html
├──  .prettierrc.js
├──  postcss.config.js
├──  tsconfig.json
├──  tailwind.config.js
├──  package.json
├──  vite.config.ts
└──  README.md
```

## 快速开始

```bash
# 安装依赖
npm install
# 或者
yarn

# 启动开发环境
npm run dev

# 构建测试环境
npm run build-fix

# 构建生产环境
npm run build
```

## 功能介绍

### 全局环境变量

- 配置全局环境变量，统一管理项目中的环境变量，包括开发环境、测试环境、生产环境等。
- package.json 中的 scripts 字段中添加命令，方便快速切换环境变量。

```json
"scripts": {
   "dev": "vite",
    "build": "run-p type-check \"build-only-production {@}\"",
    "build-fix": "run-p type-check \"build-only-development-fix {@}\"",
    "preview": "vite preview",
    "build-only-production": "cross-env NODE_ENV=production vite build --mode production",
    "build-only-development-fix": "cross-env NODE_ENV=production vite build --mode development-fix",
    "type-check": "vue-tsc --build --force",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/"
}
```

### Vant4 组件库

- 使用 Vant4 组件库，轻松实现移动端项目的 UI 效果。
- 组件库文档：https://vant-ui.github.io/vant/#/zh-CN/home

**Vant官方教程很详细，按步骤进行即可，这里不再赘述。**

需要注意的点在于：

- Viewport布局下，postcss-px-to-viewport 会导致 deprecated 的警告，需要安装 cnjm-postcss-px-to-viewport 进行替换。
- 注意Vant的组件样式，对于750的设计稿需要单独处理

### Tailwindcss 原子类框架

- 使用 Tailwindcss 原子类框架，轻松实现移动端项目的 UI 效果。
- 文档：https://tailwindcss.com/docs/installation

项目中的tail

**Tailwindcss官方教程很详细，按步骤进行即可，这里不再赘述。**

### vw 窗口适配

- 使用 vw 窗口适配，实现移动端项目的适配。
- 文档：https://github.com/amfe/lib-flexible
