const app = getApp();
const db = wx.cloud.database();

Page({
  data: {
    userInfo: null,
    genderIndex: null,
    gender: ['男', '女'],
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    gradeIndex: null
  },
  genderChange(e) {
    this.setData({
      genderIndex: e.detail.value
    }),
    //将选择存入数据库
    db.collection('userInfo').where({
      _openid: app.globalData.openId
    }).update({
      data: {
        genderIndex: this.data.genderIndex
      },
      success: function () {
        console.log('success')
      },
      fail: function (e) {
        console.log(e)
      }
    })
  },
  GradeChange(e) {
    console.log(e)
    this.setData({
      gradeIndex: e.detail.value
    })
    //将选择存入数据库
    db.collection('userInfo').where({
      _openid: app.globalData.openId
    }).update({
      data: {
        gradeIndex: this.data.gradeIndex
      },
      success: function () {
        console.log('success')
      },
      fail: function (e) {
        console.log(e)
      }
    })
  },

  phoneInput: function(e){
    var keyWord = e.detail.value;        // keyWord 为输入的值
    // 假设现在需要检测到用户输入的值，用户 1000 毫秒内没有继续输入就将该值打印出来
    this.debounce(this.updatePhone, null, 1000, keyWord);
  },
  // 防抖
  debounce: function(fn, context, delay, text) {
    clearTimeout(fn.timeoutId);
    fn.timeoutId = setTimeout(function () {
      fn.call(context, text);
    }, delay);
  },
  // 想要执行的函数
  updatePhone: function(e){
    console.log(e)
    //将选择存入数据库
    db.collection('userInfo').where({
      _openid: app.globalData.openId
    }).update({
      data: {
        phoneNumer: e
      }
    })
  },

  onLoad: async function () {
    const res =  await db.collection('userInfo').where({
      _openid: app.globalData.openId
    }).get();
    console.log(res.data)
    this.setData({
      userInfo: app.globalData.userInfo,
      gradeIndex: res.data[0].gradeIndex != undefined ? res.data[0].gradeIndex : null,
      genderIndex: res.data[0].genderIndex != undefined ? res.data[0].genderIndex : null,
      phoneNumer: res.data[0].phoneNumer != undefined ? res.data[0].phoneNumer : null
    })
  }
})