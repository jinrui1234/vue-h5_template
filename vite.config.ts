/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-13 19:01:30
 * @FilePath: /vue3-ts-h5-template/vite.config.ts
 * @Description:
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env, 999)

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
})
