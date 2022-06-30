// pages/found/grammerPage/grammerPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'poster': null,
    'text1': `一. 基础概念
    (1) 专有名词：特定的人、地方、机构等专有的名称。第一个字母通常要大写。
    e.g. Jim Green， New York， Bank of China，Peking University
    星期、月份、节日、学科、报刊名也是专有名词。
    e.g. Monday，May，Christmas，Spring Festival，Maths，China Daily
    (2) 普通名词：表示一类人或物或抽象概念的名称。普通名词又可以分为四类:
    个体名词—— 表示某类人或东西中的个体，如：student , desk
    集体名词—— 表示若干个体组成的集合体，如：class , family
    物质名词—— 表示无法分为个体的物质名称，如：water , rice , sand，hair
    抽象名词—— 表示情感，状态，品质等抽象名称，如：love ，carelessness
    个体名词和集体名词多数可以用数目来计算，称为可数名词，有单、复数形式；
    物质名词和抽象名词通常无法用数目计算，称为不可数名词，一般只有一种形式。`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('options', options)
    this.setData({
      poster: decodeURIComponent(options.poster),
      title: decodeURIComponent(options.title),
      text: decodeURIComponent(options.text)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})