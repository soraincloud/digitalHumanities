import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//路由
import store from './store'//仓库
import ElementPlus from 'element-plus'//element组件
import 'element-plus/dist/index.css'//element组件的css
import 'element-plus/theme-chalk/dark/css-vars.css'//使用element的黑暗模式css
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//element图标

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue))//注册所有element图标
{
    app.component(key, component)
}

app.mount('#app')
