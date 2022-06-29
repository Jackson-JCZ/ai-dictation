Page({
  data: {
    historyPunch: [
      '昨日', '4月15日', '4月13日登录', '4月12日登录'
    ]
  },
  punch(e) {
    wx.navigateTo({
      url: '../../chooseWord/dictation/complete/complete',
    })
  },

  onLoad(options) {

  }
})