import request from '@/utils/request'

// 加入购物车
// goodsId    =>  商品 id   iphone 8
// goodsSkuId =>  商品规格id    红色、粉色
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  }
  // 此处可以配置请求头，但是需要每次使用时都配置，不如在request请求拦截器中配置
  )
}
export const getCartTotal = () => {
  return request.get('/cart/total')
}

// 获取购物车列表
export const getCartList = () => {
  return request.get('/cart/list')
}

//  更新购物车商品的数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 删除购物车商品
export const delSelect = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
