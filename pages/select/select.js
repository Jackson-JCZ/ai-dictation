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
    list: [],
    load: true,
    Unit: ['Hello', 'Colours!', 'Look at me!', 'We love animals', 'Let\'s eat', 'Happy birthday!']
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    let tname = ['三年级上册', '三年级下册', '四年级上册', '四年级下册', '五年级上册', '五年级下册', '六年级上册', '六年级下册'];
    for (let i = 0; i < 8; i++) {
      list[i] = {};
      list[i].name = tname[i];
      list[i].id = i;
    }

    db.collection('grade3_1').where({
      unit: 0
    }).get({
      success:res=>{
        this.setData({
          wordsNum: res.data[0]['wordsNumber']
        })
      }
    })

    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  click(e){
    var unit = e.currentTarget.dataset.cur
    db.collection('grade3_1').where({
      unit: unit + 1
    }).get({
      success:res=>{
        // console.log(res.data[0]['words'])
        app.globalData.wordsList = res.data[0]['words']
        wx.navigateTo({
          url: '/pages/chooseWord/chooseWord',
        })
      }
    })
  }
})