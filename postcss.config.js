// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏幕宽度 iphoneX
      // 如果设计图是750px的，通过软件转换成一倍图=>适配的是375的标准屏幕
      // 如果设计图是640的，需要转换为320的(一倍图)，并且在这里也要改成320=>适配的是 320的标准屏幕
      viewportWidth: 375
    }
  }
}
