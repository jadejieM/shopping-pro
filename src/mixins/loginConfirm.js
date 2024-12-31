export default {
  // 此处编写的就是 Vue 组件实例的 配置项，通过一定语法，可以直接混入到组件内部
  // 可以 写 data methods computed 生命周期函数 ...都可以写，以后也可以混入组件中
  // 注意点：
  // 1.如果此处  和 组件内，提供了同名的 data(中的变量) 和 methods(中的方法)，则组件内优先级更高
  //                                    出现同名不是data 和methods两个大块，是其中的内容同名
  // 2.如果编写了生命周期函数，则mixins中的生命周期函数 和 页面的生命周期函数，会用数组管理统一执行 (都执行)
  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    sayHi () {
      console.log('你好')
    },

    // 根据登录状态，判断是否需要显示登录确认框 两种情况
    // 1.如果未登录 => 显示确认框   返回true
    // 2.如果已登录 => 无反应       返回false
    loginConfirm () {
      // 判断token是否存在
      // 1.如果 token 不存在，弹确认框
      // 2.如果 token 存在继续请求操作
      // console.log(this.$store.getters.token)
      if (!this.$store.getters.token) {
        // 弹确认框
        console.log(this.$store.getters.token)
        // console.log('弹确认框')
        this.$dialog.confirm({
          title: '温馨提示',
          message: '需要登录才能继续操作',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // on confirm
            // 如果希望跳转到登录，并且希望登录后回到原页面，则需要在跳转去的同时携带参数(当前的路径地址)
            // 当前的路径地址：this.$route.path (不带查询参数)
            // 当前的路径地址：this.$route.fullPath (会包含查询参数)
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
            // on cancel
          })
        return true
      }
      return false
    }
  }
}
