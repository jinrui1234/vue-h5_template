import './styles/main.css';
import './styles/tailwind.css';
import { createApp } from 'vue';

import App from './App.vue';
import VConsole from 'vconsole';
import router from './router';
import store from './stores';

// 引入组件样式
import 'vant/lib/index.css';
// 全局引入本地svg图标
import ISvgIcon from './components/i-svg-icon/index.vue';
import 'virtual:svg-icons-register';

if (import.meta.env.VITE_APP_VCONSOLE === 'true') {
  new VConsole();
}

const app = createApp(App);
app.component('i-svg-icon', ISvgIcon);
app.use(store);
app.use(router);

app.mount('#app');
