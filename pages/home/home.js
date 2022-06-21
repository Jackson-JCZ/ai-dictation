// pages/home/home.js
Page({
  data: {
    curPage: "home",
    curBar: '1',
    bar: {
      "home": {
        color: "blue",
        name: "主页",
        icon: 'home'
      },
      "found": {
        color: "green",
        name: "发现",
        icon: 'rankfill'
      },
      "my": {
        color: "purple",
        name: "我的",
        icon: 'my'
      }
    },
    studyList: ['科幻故事', '历史人文', '日常对话', '自然地理']
  },
  navChange(e) {
    this.setData({
      curPage: e.currentTarget.dataset.cur
    });
  },
  click1() {
    wx.navigateTo({
      url: '/pages/photo/photo',
    });
  },
  click2() {
    wx.navigateTo({
      url: '/pages/select/select',
    });
  },
  click3() {
    wx.navigateTo({
      url: '/pages/challenge/challenge',
    });
  },
  barChange(e) {
    this.setData({
      curBar: e.currentTarget.dataset.cur
    });
  },
})