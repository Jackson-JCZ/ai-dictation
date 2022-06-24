// pages/home/select/select.js
wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = wx.cloud.database();
const app = getApp();
Page({
  data: {
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    load: true
  },
  onLoad: async function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });

    // 读取数据
    const {
      data
    } = await db.collection('textbook').get();

    this.setData({
      data: data,
      list: Array(data.length).fill().map(() => Object())
    });
  },
  onReady() {
    wx.hideLoading();
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    });
  },
  VerticalMain(e) {
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + i);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      this.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        this.setData({
          VerticalNavTop: (i - 1) * 50,
          TabCur: i
        })
        return false
      }
    }
  },
  click(e) {
    const {
      book,
      unitindex
    } = e.currentTarget.dataset;
    for (let item of this.data.data) {
      if (item.name === book) {
        app.globalData.wordsList = item.unit[unitindex].words;
        break;
      }
    }
    wx.navigateTo({
      url: '/pages/chooseWord/chooseWord',
    })
  }
})