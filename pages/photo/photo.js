// pages/photo/photo.js
const app = getApp();
Page({
  takePhoto() {
    wx.getSetting({
      success:(res)=> {
        //如果没有权限，提示
        if (!res.authSetting['scope.camera']) {
          wx.showModal({
            title: '授权提示',
            content: '请先允许小程序访问相机权限',
            success(res) {
              if (res.confirm) {
                wx.openSetting({
                  scope: 'scope.camera',
                  success(res) {
                    if (res.authSetting['scope.camera']) {
                      //授权成功返回拍照页面
                      wx.redirectTo({
                        url: '/pages/index/index',
                      })
                    }
                  }
                })
              }
            }
          })
        } else {
          const ctx = wx.createCameraContext()
          ctx.takePhoto({
            quality: 'high',
            success: (res) => {
              app.globalData.src=res.tempImagePath
              wx.navigateTo({
                url: './photo2/photo2',
              })
            }
          })
        }
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  chooseImage: function(type) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res)=> {
        // 选择图片后的完成确认操作
        app.globalData.src=res.tempFilePaths[0]
        wx.navigateTo({
          url: './photo2/photo2',
        })
      }
    })
  }
})