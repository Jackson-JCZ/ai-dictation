// pages/challenge/challenge.js
wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'curBar': 1,
    'changeLevel': ['三年级', '四年级', '五年级', '六年级']
  },
  barChange(e) {
    this.setData({
      curBar: e.currentTarget.dataset.cur - 2
    });
  },
  challengrBegin: async function (e) {
    const db = wx.cloud.database();
    const _ = db.command;
    const grade = this.data.curBar + 2;
    const {
      data
    } = await db.collection('textbook').where({
      name: _.in([`grade${grade}_1`, `grade${grade}_2`])
    }).get();
    var words = [];
    for (let item of data) {
      for (let key in item.unit) {
        words = words.concat(item.unit[key].words);
      }
    }

    // 从words随机抽取10个词
    var newWords = [],
      max = words.length - 1;
    while (newWords.length < 10) {
      let index = Math.floor(Math.random() * (max + 1));
      newWords.push(words[index]);
      words[index] = words[max];
      max--;
    }
    const app = getApp();
    app.globalData.wordsList = newWords;
    wx.navigateTo({
      url: '../../chooseWord/chooseWord',
    })
  }
})