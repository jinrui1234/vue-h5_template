/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_DEFAULT_TITLE: string // 应用默认标题
  readonly VITE_APP_ENV: string // 应用环境
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
