import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: getInfo()
    }
  },
  // vuex状态的提供，可以同一个对象 state:{}也可以写一个函数然后return返回一个对象state(){return{}}
  // 为了保证数据的独立性，推荐写为函数后用return返回
  mutations: {
    // 所有mutations的第一个参数都是state(不可省略)，第二个参数才可以是形参(可以省略)
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {},
  getters: {}
}
