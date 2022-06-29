// pages/home/home.js
Page({
  data: {
    curPage: "home",
    curBar: '1',
    scienceInfo: null,
    bar: {
      "home": {
        color: "blue",
        name: "主页",
        icon: 'home'
      },
      "found": {
        color: "green",
        name: "排行榜",
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
      url: './select/select',
    });
  },
  click3() {
    wx.navigateTo({
      url: './challenge/challenge',
    });
  },
  barChange(e) {
    this.setData({
      curBar: e.currentTarget.dataset.cur
    });
  },
  onShow() {
    //科幻故事
    const scienceUrl = 'https://www.zhihu.com/api/v4/topics/21853257'
    const context = this
    wx.request({
      url: scienceUrl,
      method: 'GET',
      success(res) {
        context.setData({
          scienceInfo: res.data
        })
      }
    });
    //历史人文
    const historyUrl = 'https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=20&lang=Cn'
    wx.request({
      url: historyUrl,
      method: 'GET',
      success(res) {
        console.log(res.data)
        context.setData({
          historyInfo: res.data
        })
      }
   })
  }
  

})