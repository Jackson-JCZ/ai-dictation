// pages/about/studyLog/studyLog.js
const app = getApp()
Page({
  data: {
    history: [
      {
        'date': "6/28",
        'words': ['ruler [ruːlə(r)] "n. 统治者，管理者；尺子，直尺；标尺"', 'pencil [pens(ə)l]n. 铅笔；石墨芯，类似石墨芯的东西；化妆笔', 'eraser [ɪˈreɪzə(r)] n. 橡皮擦，黑板擦 ']
      },
      {
        'date': "6/27",
        'words': ['crayon [kreɪən] n. 彩色粉笔；彩色粉笔画', 'bag [bæɡ] n. 袋，包；一袋的量；大量，很多', 'pen [pen] n. 笔，钢笔；围栏，圈；电子笔', 'book [bʊk] n. 书，书籍；本子，簿册；篇，卷，部', 'no [nəʊ] adv. 不，完全不']
      }
    ]
  },
  onShow() {
    console.log(app.globalData.wordsList)
    console.log(app.globalData.wordsData)
  }
})