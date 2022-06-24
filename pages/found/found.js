Component({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    TabIndex: ['排行榜', '记笔顺', '语法站'],
    lastdayIncome: [{
        name: '小明',
        headPhone: '../../images/头像1.png',
        total: 524
      },
      {
        name: '小往',
        headPhone: '../../images/头像2.png',
        total: 499
      },
      {
        name: '小葱',
        headPhone: '../../images/头像3.png',
        total: 399
      },
      {
        name: 'doit',
        headPhone: '../../images/头像1.png',
        total: 200
      },
      {
        name: 'jkey',
        headPhone: '../../images/头像1.png',
        total: 100
      }

    ]
  },
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      });
    }
  }
})