// pages/photo/photo2/photo2.js
var app = getApp();
wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
})
Page({
  data: {
    src: '',
    width: 250, //宽度
    height: 250, //高度
  },
  onLoad: function () {
    //获取到image-cropper实例
    this.cropper = this.selectComponent("#image-cropper");
    //获取图片
    this.setData({
      src: app.globalData.src
    });
    wx.showLoading({
      title: '加载中'
    })
  },
  loadimage(e) {
    // console.log("图片加载完成", e.detail);
    wx.hideLoading();
    //重置图片角度、缩放、位置
    this.cropper.imgReset();
  },
  rotate() {
    //旋转90°
    this.cropper.setAngle(this.cropper.data.angle += 90);
  },
  end(e) {
    clearInterval(this.data[e.currentTarget.dataset.type]);
  },
  submit() {
    wx.showLoading({
      title: '识别中'
    });
    this.cropper.getImg((obj) => {
      // app.globalData.imgSrc = obj.url;

      var myDate = new Date();
      //上传图片
      wx.cloud.uploadFile({
        cloudPath: myDate.getTime() + '.png',
        filePath: obj.url,
        success: res => {
          var fileID = res.fileID;
          //获取临时链接
          wx.cloud.getTempFileURL({
            fileList: [fileID],
            success: _res => {
              var fileURL = _res.fileList[0].tempFileURL
              //文字识别
              wx.request({
                url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=' + '24.4636ca9286ed0e996c0e8979979f20bf.2592000.1622739340.282335-24108924',
                method: 'POST',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                  url: fileURL,
                  language_type: 'ENG'
                },
                success: (_res) => {
                  app.globalData.words = _res.data.words_result
                  wx.hideLoading();
                  wx.navigateTo({
                    url: '/pages/chooseWord/chooseWord',
                  })
                }
              })
            }
          })
        },
        fail: console.error
      })
      //需要对图片base64编码后进行urlencode，需去掉编码头
      // wx.request({
      //   url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=' + '24.4636ca9286ed0e996c0e8979979f20bf.2592000.1622739340.282335-24108924',
      //   method: 'POST',
      //   header: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   data:{
      //     url: obj.url
      //     image:        //二选一
      //   },
      //   success: (_res)=>{
      //     console.log('yes')
      //     console.log(_res)
      //   }
      // })
    });
  },
})