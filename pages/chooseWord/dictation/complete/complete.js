// pages/chooseWord/dictation/complete/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordsList : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    this.setData({
      wordsList: app.globalData.wordsList
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    wx.navigateBack({
      delta: 2
    })
  },

  /**
   * 生命周期函数--监听用户分享
   */
  onShareAppMessage(){
    return {
      title: `我在小学英语学习小程序学习了${this.data.wordsList.length}个单词，你也来看看吧!`,
      path: '/pages/home/home'
    }
  },

  back() {
    wx.navigateBack()
  }
})