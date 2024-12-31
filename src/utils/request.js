import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
// 创建 axios 实例，将来对创建出来的实例，进行自定义配置
// 好处：不会污染原始的 axios 实例
const instance = axios.create({
  headers: { platform: 'h5' },
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000 // 超时时间，这里给长一点

})

// 自定义配置 - 配置 请求/响应拦截器

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启 loading，禁止背景点击(节流处理，防止多次无效触发)
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0, // 为 0 不会自动消失
    loadingType: 'spinner' // 配置loading图标
  })

  // 只要有token，那么就在请求时携带，便于请求需要授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token // 此处对带有特殊字符 - 的使用了对象的中括号语法
    // 对待特殊字符的，必须中括号，然后使用
    config.headers.platform = 'H5' // 此处对象不带特殊字符，直接 . 使用
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会多包装一层data，需要响应拦截器中处理一下)
  // console.log('success')
  // const res = response.data
  const res = response.data
  if (res.status !== 200) {
    // 给错误提示   此处js并不是Vue组建的环境，不能直接this,所以要使用Toast只能导包使用
    // Toast 默认是单例模式，后面的 Toast 调用了，会将前一个 Toast效果覆盖
    // 且同时只能存在一个 Toast
    Toast(res.message)
    // 抛出一个错误的promise
    return Promise.reject(res.message)
  } else {
    // 正确情况，直接走业务核心逻辑，清除 loading 效果
    Toast.clear()
  }
  // console.log(res)

  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出配置好的实例
export default instance
