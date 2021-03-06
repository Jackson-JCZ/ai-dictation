// pages/my/my.js
wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = wx.cloud.database();
const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: '/icon/portrait.svg',
      nickName: '请先登录'
    },
    isLogin: false
  },
  methods: {
    // 第一次登录
    doLogin: async function () {
      if (this.data.isLogin) {
        return;
      }
      wx.showLoading({
        title: '登录中',
      });
      const result = await wx.getUserProfile({
        desc: "获取用户信息"
      }).catch(e => {});
      // console.log(result)
      if (!result) {
        wx.showToast({
          title: '授权失败',
          icon: "none"
        });
        return;
      }
      const {
        nickName,
        avatarUrl
      } = result.userInfo;
      this.setData({
        isLogin: true,
        userInfo: {
          nickName,
          avatarUrl
        }
      });
      // 获取openId
      const {
        'result': {
          openId
        }
      } = await wx.cloud.callFunction({
        name: 'loginRequest'
      })
      app.globalData.isLogin = true;
      app.globalData.userInfo = this.data.userInfo;
      app.globalData.openId = openId;

      // 获取用户头像base64编码
      const {
        "result": {
          avatarCode
        }
      } = await wx.cloud.callFunction({
        name: 'urlToBase64',
        data: {
          avatarUrl: avatarUrl
        }
      })
      console.log(avatarCode)

      // 存入数据库
      db.collection('userInfo').add({
        data: {
          nickName,
          avatarCode
        },
        success: function () {
          console.log('success')
        },
        fail: function (e) {
          console.log(e)
        }
      })

      wx.hideLoading();
      wx.showToast({
        title: '登录成功',
        icon: "none"
      });
    },
  },
  lifetimes: {
    attached: async function () {
      if (app.globalData.isLogin) {
        this.setData({
          isLogin: true,
          userInfo: app.globalData.userInfo
        })
      }
      // else {
      // // 检测数据库中是否有登录信息
      // wx.showLoading({
      //   title: '获取登录状态',
      // });
      // const res = await wx.cloud.callFunction({
      //   name: 'loginRequest'
      // })
      // const openId = res.result.openId;
      // this.setData({
      //   openId: openId
      // });
      // const res2 = await db.collection('userInfo').where({
      //   _openid: openId
      // }).get();
      // console.log('RES2', res2)
      // if (res2.data.length) {
      //   // 登录成功
      //   const {
      //     nickName,
      //     avatarCode,
      //     starTotal,
      //     punch,
      //     history
      //   } = res2.data[0];
      //   this.setData({
      //     isLogin: true,
      //     userInfo: {
      //       nickName: nickName,
      //       avatarUrl: avatarCode
      //     },
      //   });
      //   app.globalData.isLogin = true;
      //   app.globalData.userInfo = this.data.userInfo;
      //   app.globalData.openId = openId;
      //   app.globalData.starTotal = starTotal;
      //   app.globalData.punch = punch || [];
      //   app.globalData.history = history || [];
      //   wx.hideLoading();
      // } else {
      //   wx.hideLoading();
      //   wx.showToast({
      //     title: '未登录',
      //     icon: 'none'
      //   })
      // }
      // }
    }
  }
})