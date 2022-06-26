wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = wx.cloud.database();
const app = getApp();

Component({
  data: {
    TabCur: 0,
    // scrollLeft: 0,
    TabIndex: ['排行榜', '记笔顺', '语法站'],
    yourIndex: '未有排名',
    historyAccord: [{
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
    ],
    
  },
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        // scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      });
    }
  },
  lifetimes: {
    attached: async function () {
      const res = await db.collection('userInfo').get()
      this.setData({
        historyAccord: res.data.sort((itemx, itemy)=> {
          return itemy.starTotal - itemx.starTotal;
        })
      })
      //已登录状态
      if (app.globalData.isLogin) {
        //获取个人排名
        let personalIndex = 0;
        for(let i=0; i<res.data.length; i++) {
          if(res.data[i]._openid == app.globalData.openId) {
            personalIndex = i;
            break;
          }
        }
        this.setData({
          userInfo: app.globalData.userInfo,
          starTotal: app.globalData.starTotal,
          yourIndex: personalIndex+1
        })
      } else {
        this.setData({
          userInfo: {
            nickName: '???',
            avatarUrl: '/icon/portrait.svg'
          },
          starTotal: '??'
        })
      }
    }

  }
})