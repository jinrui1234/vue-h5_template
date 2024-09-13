**🌱 基于 Vue3 全家桶、TS/JS、Vite 构建工具，开箱即用的移动端项目基础模板**

- [x] ⚡ Vue3 + Vite5
- [x] 🍕 TypeScript
- [x] ✨ 全局环境变量
- [x] 🎨 Vant4 组件库
- [x] 🌀 Tailwindcss 原子类框架

## 目录结构

```
├── dist
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── router
│   ├── store
│   ├── styles
│   ├── utils
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├── .env.development.local
├── .env.production.local
├── .env.staging.local
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
    "build-only-production": "cross-env NODE_ENV=production vite build --mode production",
    "build-only-development-fix": "cross-env NODE_ENV=production vite build --mode development-fix",
}
```
