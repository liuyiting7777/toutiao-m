import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

// 加载vant核心组件库
import Vant from '../node_modules/vant/es/index.js'
// 加载vant全局样式
import '../node_modules/vant/lib/index.css'

// 注册使用vant组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
