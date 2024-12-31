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
  actions: {
    logout (context) {
      // 1.个人信息要重置  调用传送个空对象即可
      context.commit('setUserInfo', {})
      // 2. 购物车信息要重置  需要跨模块调用 mutation   cart/setCartList
      context.commit('cart/setCartList', [], { root: true })
      // {root:true}表示开启全局模式
    }
  },
  getters: {}
}
