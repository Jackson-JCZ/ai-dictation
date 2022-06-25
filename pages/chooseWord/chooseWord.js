// pages/chooseWord/chooseWord.js
wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false,
    slide: 'slide-right',
    src: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });

    // 音频对象
    this.audioCtx = wx.createInnerAudioContext({
      useWebAudioImplement: true
    })
    this.audioCtx.autoplay = true;

    const {'result': wordsData} = await wx.cloud.callFunction({
      name: 'translation',
      data: {
        wordsList: app.globalData.wordsList
      }
    });
    this.setData({
      wordsList: app.globalData.wordsList,
      wordsData
    })
    // console.log(JSON.stringify(wordsData.result));
    wx.hideLoading();
  },
  changeEdit() {
    var that = this;
    // var anmiaton = e.currentTarget.dataset.class;
    that.setData({
      animation: 'slide-right',
      isEdit: !this.data.isEdit
    });
    setTimeout(function () {
      that.setData({
        animation: ''
      });
    }, 1000);
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      wordIndex: e.currentTarget.dataset.cur,
      inputWord: this.data.wordsList[e.currentTarget.dataset.cur]
    });
  },
  hideModal() {
    this.setData({
      inputWord: '',
      modalName: null
    })
  },
  deleteWord() {
    var newList = this.data.wordsList,
      newData = this.data.wordsData;
    newList.splice(this.data.wordIndex, 1);
    newData.splice(this.data.wordIndex, 1);
    this.setData({
      wordsList: newList,
      wordsData: newData
    });
    this.hideModal();
  },
  inpu(e) {
    this.setData({
      inputWord: e.detail.value
    });
  },
  changeWord: async function () {
    if (!this.data.inputWord) {
      wx.showToast({
        title: '请输入单词',
        icon: 'error'
      });
    } else {
      let newList = this.data.wordsList,
        newData = this.data.wordsData,
        index = this.data.wordIndex;

      // 没有修改
      if (this.data.inputWord === newList[index]) {
        this.hideModal();
        return;
      }

      // 如果已存在
      for (let word of newList) {
        if (word === this.data.inputWord) {
          wx.showToast({
            title: '已存在单词',
            icon: 'none'
          })
          return;
        }
      }

      wx.showLoading({
        title: '修改中...',
        mask: true
      });
      const res = await wx.cloud.callFunction({
        name: 'translation',
        data: {
          wordsList: [this.data.inputWord]
        }
      });
      newList[index] = this.data.inputWord;
      newData[index] = res.result[0];
      this.setData({
        wordsList: newList,
        wordsData: newData
      });
      wx.hideLoading();
      this.hideModal();
      wx.showToast({
        title: '修改成功',
        icon: 'none'
      })
    }
  },
  addWord: async function () {
    console.log(this.data.inputWord)
    if (!this.data.inputWord) {
      wx.showToast({
        title: '请输入单词',
        icon: 'error'
      });
    } else {
      let newList = this.data.wordsList;

      // 如果已存在
      for (let word of newList) {
        if (word === this.data.inputWord) {
          wx.showToast({
            title: '已存在单词',
            icon: 'none'
          })
          return;
        }
      }

      wx.showLoading({
        title: '添加中...',
        mask: true
      });
      newList.push(this.data.inputWord);
      const res = await wx.cloud.callFunction({
        name: 'translation',
        data: {
          wordsList: [this.data.inputWord]
        }
      });
      this.setData({
        wordsList: newList,
        wordsData: this.data.wordsData.concat(res.result)
      });
      wx.hideLoading();
      this.hideModal();
      wx.showToast({
        title: '添加成功',
        icon: 'none'
      })
    }
  },
  speek(e) {
    this.audioCtx.src = 'http://dict.youdao.com/dictvoice?type=0&audio=' + e.currentTarget.dataset.word;
  }
})