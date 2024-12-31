import request from '@/utils/request'

// 订单结算确认接口
// mode：cart => obj 中要有 cartIds
// mode：cart => obj 中要有 goodsId goodsNum  goodsSkuId
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // 两个值：cart(购物车) buyNow
      delivery: 10, // 10 快递 20 门店自提
      couponId: 0, // 优惠券 ID 传 0 不使用优惠券
      isUsePoints: 0, // 积分 传 0 表示不使用积分
      ...obj // 将传递过来的参数对象，动态展开
    }
  })
}

// 提交订单
// mode：cart => obj 中要有 cartIds remark(用户留言)
// mode：cart => obj 中要有 goodsId goodsNum  goodsSkuId
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 10 快递配送    20 门店自提
    couponId: 0,
    isUsePoints: 0,
    payType: 10, // 余额支付
    ...obj
  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page // 可以用list去做分页
    }
  })
}
