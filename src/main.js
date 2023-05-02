import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入你需要的vant组件
import { Button, Image, Tabbar, TabbarItem } from 'vant';
// 引入vant组件样式
import 'vant/lib/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
// 注册你需要的组件
app.use(Button);
app.use(Image);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app')
