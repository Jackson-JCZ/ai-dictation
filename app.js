// app.js
App({
  onLaunch() {

  },
  globalData: {
    isLogin: false,
    src: '',
    wordsList: ['why', 'hello'],
    wordsData: [
      {
        phonetic: 'waɪ',
        explains: ['adv.为什么，为何;何必;为什么，…的原因', 'n.原因;理由;说明;难解的问题']
      },
      {
        phonetic: 'həˈləʊ',
        explains: ['int./n.你好;喂;嘿']
      }
    ]
  },
})
