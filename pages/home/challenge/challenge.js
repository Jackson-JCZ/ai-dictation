// pages/challenge/challenge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'curBar': 5,
    'changeLevel': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
  },
  barChange(e) {
    this.setData({
      curBar: e.currentTarget.dataset.cur
    });
  },
  challengrBegin(e) {
    wx.navigateTo({
      url: '../../chooseWord/chooseWord',
    })
  }
})