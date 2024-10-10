/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-13 11:49:48
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-10-10 11:18:29
 * @FilePath: /vue3-ts-h5-template/vite.config.ts
 * @Description:
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import compressionViteCompression from 'vite-plugin-compression';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// 当前工作目录路径
const root: string = process.cwd();
console.log('当前工作目录路径:', root);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root);
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      mockDevServerPlugin(),
      // vueDevTools(),
      AutoImport({
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      // GZIP压缩
      compressionViteCompression({
        threshold: 10240, // 对超过10k的资源进行压缩
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: false
      }),
      createSvgIconsPlugin({
        symbolId: 'icon-[dir]-[name]',
        iconDirs: [resolve(root, 'src/assets/icons')]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: true,
      proxy: {
        '^/dev-api': {
          target: ''
        }
      }
    }
  });
});
