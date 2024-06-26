import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import store from './store';

createApp(App).use(router).use(store).mount('#app'); //注册路由
