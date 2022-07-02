// app.js
App({
  onLaunch() {

  },
  globalData: {
    isLogin: false,
    src: '',
    wordsList: ['why', 'hello'],
    wordsData: [{
        phonetic: 'waɪ',
        explains: ['adv.为什么，为何;何必;为什么，…的原因', 'n.原因;理由;说明;难解的问题']
      },
      {
        phonetic: 'həˈləʊ',
        explains: ['int./n.你好;喂;嘿']
      }
    ],
    punch: [],  // 格式['y2022m6d29', 'y2022m6d28', 'y2022m6d27', 'y2022m5d30']
    history: [],
    starTotal: 0,
    like_artical: []
  },
})