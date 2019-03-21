// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueI18n from 'vue-i18n'
import zhCN from './assets/lang/zh-CN'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

Vue.use(VueI18n)
Vue.use(Antd)
Vue.config.productionTip = false
const i18n = new VueI18n({locale: 'zhCN', messages: { zhCN }})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
