/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-06 13:39:26
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
