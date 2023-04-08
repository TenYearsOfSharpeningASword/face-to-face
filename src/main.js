// 该文件为整个项目的入口


//引入vue
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);
//创建vue对象
new Vue({
  el: '#app',
  render: h => h(App)
})
