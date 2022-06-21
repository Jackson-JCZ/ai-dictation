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
      wx.showLoading({
        title: '登录中',
      });
      const result = await wx.getUserProfile({
        desc: "获取用户信息"
      }).catch(e => {});
      console.log(result)
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
        userInfo: {
          nickName,
          avatarUrl
        }
      });
      app.globalData.isLogin = true;
      app.globalData.userInfo = this.data.userInfo;
      wx.showToast({
        title: '登录成功',
        icon: "none"
      });

      // 存入数据库
      // 存储用户昵称
      db.collection('userInfo').add({
        data: {
          nickName: nickName
        },
        success: function () {
          console.log('success')
        },
        fail: function (e) {
          console.log(e)
        }
      })
      console.log('ava', avatarUrl)
      // 存储用户头像
      await wx.cloud.callFunction({
        name: 'loginRequest',
        data: {
          avatarUrl: avatarUrl,
          openId: this.data.openId
        }
      })
      wx.hideLoading()
    },
  },
  lifetimes: {
    attached: async function () {
      if (app.globalData.isLogin) {
        this.setData({
          isLogin: true,
          userInfo: app.globalData.userInfo
        })
      } else {
        // 检测数据库中是否有登录信息
        wx.showLoading({
          title: '获取登录状态',
        });
        const res = await wx.cloud.callFunction({
          name: 'loginRequest'
        })
        const openId = res.result.openId;
        this.setData({
          openId: openId
        });
        const res2 = await db.collection('userInfo').where({
          _openid: openId
        }).get();
        if (res2.data.length) {
          // 登录成功
          const {
            nickName,
            fileID
          } = res2.data[0];
          // 获取临时链接
          const res3 = await wx.cloud.getTempFileURL({
            fileList: [fileID]
          })
          const avatarUrl = res3.fileList[0].tempFileURL;
          this.setData({
            isLogin: true,
            userInfo: {
              avatarUrl: avatarUrl,
              nickName: nickName
            },
          });
          app.globalData.isLogin = true;
          app.globalData.userInfo = this.data.userInfo;
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '未登录',
            icon: 'none'
          })
        }
      }
    }
  }
})