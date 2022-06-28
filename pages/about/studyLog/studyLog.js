// pages/about/studyLog/studyLog.js
const app = getApp()
Page({
  data: {
    history: [
      {
        'date': "6/28",
        'words': ['ruler [ruːlə(r)] "n. 统治者，管理者；尺子，直尺；标尺"', 'pen', 'your']
      },
      {
        'date': "6/27",
        'words': ['color', 'sun', 'watermelon', 'food', 'job']
      }
    ]
  },
  onShow() {
    console.log(app.globalData.wordsList)
    console.log(app.globalData.wordsData)
  }
})