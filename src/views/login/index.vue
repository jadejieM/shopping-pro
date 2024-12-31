<template>
  <div class="login">
    <!-- 头部 -->
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <!-- $router.go(-1) 和 $router.back() 都可以实现返回上一页 -->

    <!-- 主体 -->
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picUrl" :src="picUrl" @click="getPicCode" alt="">
        </div>
        <div class="form-item">
          <input v-model="msgCode" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getCode">
            {{second === totalSecond ? '获取验证码' : second + '秒后重新发送'}}
          </button>
        </div>
      </div>

      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
// 按需导入
import { codeLogin, getMsgCode, getPicCode } from '@/api/login'
// import { Toast } from 'vant'
export default {
  name: 'LoginPage',
  data () {
    return {
      picKey: '', // 将来请求传递的图形验证码唯一标识
      picUrl: '', // 存储请求渲染的图片地址
      totalSecond: 60, // 验证码倒计时总秒数，从60秒开始倒计时
      second: 60, // 当前描述，开定时器对 second --
      timer: null, // 定时器 id
      mobile: '', // 手机号
      picCode: '', // 用户输入的图形验证码
      msgCode: ''// 短信验证码
    }
  },
  async created () {
    this.getPicCode()
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.picUrl = base64 // 存储地址
      this.picKey = key // 存储唯一标识

      // Toast('获取图形验证码成功')
      // this.$toast('hello')
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true
      // })
    },
    // 校验方法手机号和图形验证码是否合法
    // 通过校验则返回true
    // 不通过校验返回false
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    // 获取短信验证码
    async getCode () {
      if (!this.validFn() === true) {
        // 如果没有通过校验，没必要往下走
        return
      }
      // 当目前没有定时器开着，且 totalSecond 和 second 一致(秒数归位了)  才可以倒计时
      if (!this.timer && this.second === this.totalSecond) {
        // 发送请求(预期：希望如果响应的status非200，最好抛出一个promise错误,aiait只会等待成功的promise)
        await getMsgCode(this.picCode, this.picKey, this.mobile)
        this.$toast('短信发送成功')
        // console.log(res)
        // 开启倒计时
        this.timer = setInterval(() => {
          // console.log('倒计时ing')
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null // 重置定时器
            this.second = this.totalSecond// 时间计数归位
          }
        }, 1000)
      }
    },
    async login () {
      if (!this.validFn()) return
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }

      console.log('发送登录请求')

      const res = await codeLogin(this.mobile, this.msgCode)
      console.log(res)
      this.$store.commit('user/setUserInfo', res.data)
      this.$toast('登录成功')

      // 进行判断，看地址栏是否有回跳地址
      // 如果有 => 说明是其他页面拦截到登录页来的，需要回跳
      // 如果没有 =>  正常去首页
      const url = this.$route.query.backUrl || '/'

      // 使用push会保留原来的登录页，此时点返回键会回到登录页
      // this.$router.push(url)
      // 解决方法：比如此处，将需要跳转到登录页，且登录后还需要回跳回去的页面的router跳转处的push改为replace
      // replace在跳转时不会产生历史，等于将当前页面换为了另一个页面，而不是跳转到下一个页面，此时也就解决了问题
      this.$router.replace(url)
    }
  },
  // 离开页面，清除倒计时
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
