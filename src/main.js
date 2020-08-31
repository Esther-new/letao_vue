import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { Lazyload } from 'vant';
// 引入js文件不需要对象
import '@/util/filter.js';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
