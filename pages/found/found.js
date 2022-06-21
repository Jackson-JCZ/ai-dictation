Component({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    TabIndex: ['排行榜', '记笔顺', '语法站']
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