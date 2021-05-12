// pages/chooseWord/chooseWord.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false,
    slide: 'slide-right'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      wordsList: app.globalData.wordsList
    })
    // wx.request({
    //   url: 'https://api.tianapi.com/txapi/enwords/index',
    //   method: 'GET',
    //   data: {
    //     key: '7617c6dcc97874bddb501a8138ed6ab2',
    //     word: app.globalData.wordsList[0]
    //   },
    //   success: res=>{
    //     console.log(res.data.newslist[0]['content'])
    //   }
    // })
  },

  changeEdit() {
    var that = this;
    // var anmiaton = e.currentTarget.dataset.class;
    that.setData({
      animation: 'slide-right',
      isEdit: this.data.isEdit == false
    });
    setTimeout(function () {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      wordIndex: e.currentTarget.dataset.cur
    })
    // console.log(this.data.wordIndex)
  },
  hideModal() {
    this.setData({
      modalName: null
    })
  },
  deleteWord() {
    var newList = this.data.wordsList;
    newList.splice(this.data.wordIndex, 1);
    this.setData({
      wordsList: newList
    })
    this.hideModal()
  },
  inpu(e) {
    this.setData({
      inputWord: e.detail.value
    })
  },
  changeWord() {
    var newList = this.data.wordsList;
    newList[this.data.wordIndex] = this.data.inputWord;
    this.setData({
      wordsList: newList
    })
    this.hideModal();
  },
  addWord(){
    var newList = this.data.wordsList;
    newList.unshift(this.data.inputWord)
    this.setData({
      wordsList: newList
    })
    this.hideModal();
  }
})