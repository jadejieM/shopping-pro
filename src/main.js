import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/common.less'

// 全部导入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// 插件安装初始化：内部会将vant所有的组件进行导入注册
// Vue.use(Vant)

// 按需导入
// import { Button, Switch } from 'vant'
// Vue.use(Button)
// Vue.use(Switch)
// 如果按需导入都加在main.js当中，随着项目的进行，使用插件也会越来越多，
// 所以我们单独在utils中建立一个vant-ui.js文件来保存插件
import '@/utils/vant-ui' // 这里导入创建的保存组件的js文件
// import { Toast } from 'vant'
// Toast('Hello')
// this.$toast('shili') //不可以，通过this调用必须要有实例，而最外层的this是undefined，所以只能在组件中调用
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
