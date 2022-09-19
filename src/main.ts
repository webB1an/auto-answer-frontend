import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';

import 'virtual:svg-icons-register';

import App from './App.vue';
import router from './router';

import '@/style/index.scss';
import 'normalize.css/normalize.css';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

import SvgIcon from '@/components/SvgIcon.vue';
import CustomTip from '@/components/CustomTip/index.vue';

const app = createApp(App);

app.component('SvgIcon', SvgIcon);
app.component('CustomTip', CustomTip);

app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount('#app');
