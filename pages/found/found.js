wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = wx.cloud.database();
const app = getApp();

Component({
  data: {
    TabCur: 0,
    // scrollLeft: 0,
    TabIndex: ['排行榜', '语法站'],
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
    gramerCard: [
      {
        'img': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5kGbzZ08KO0TByfYGcyGKDYtpS3AZqIGFDKEPwXoEhp6WS9vzIXpN3BagHxuSZlXddpQKYRBBtnm9aT9RNHpE7Y!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5',
        'title': '名词知多少?',
        'like': 'cuIcon-like',
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5mtuA5T6HYBb..mHUOOspw99.OVfULzn3ZnlY9yiC1BXJ33R03flk3FJFjesT1Itr5YgYucxuyoMIRIlJD74Ny8!/b&bo=LwNQAgAAAAADJ3w!&rf=viewer_4&t=5'
      },
      {
        'img': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5sADoHgePVXR1aDH60z5upYVaGKbousavXjChmw*wZ.G0K*mUZKGEp9o.mWhh0LayBxMyMPIKqxT0UUIU1iWCwk!/b&bo=AAIAAgAAAAADJwI!&rf=viewer_4&t=5',
        'title': '实用口语100句',
        'like': 'cuIcon-like',
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5sADoHgePVXR1aDH60z5upYVaGKbousavXjChmw*wZ.G0K*mUZKGEp9o.mWhh0LayBxMyMPIKqxT0UUIU1iWCwk!/b&bo=AAIAAgAAAAADJwI!&rf=viewer_4&t=5'
      },
      {
        'img': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5opa4TzNhmATHj4Bwp7*DYLytIdkPpUht6wmMLMCI.M9ltoc*2EXGs70Xz6rQoT6mO*OuNoxdo24LFIsXKs*CSc!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5',
        'title': '简单易记语法口诀',
        'like': 'cuIcon-like',
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5opa4TzNhmATHj4Bwp7*DYLytIdkPpUht6wmMLMCI.M9ltoc*2EXGs70Xz6rQoT6mO*OuNoxdo24LFIsXKs*CSc!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5'
      },
      {
        'img': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5opa4TzNhmATHj4Bwp7*DYLYDUtryWXEgfDfsW83Axe8bQZe1uzMrn4gwYa86xZXm7RC3i0r8mXSV7lCKkBEfnQ!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5',
        'title': 'My Family如何看?',
        'like': 'cuIcon-like',
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5opa4TzNhmATHj4Bwp7*DYLYDUtryWXEgfDfsW83Axe8bQZe1uzMrn4gwYa86xZXm7RC3i0r8mXSV7lCKkBEfnQ!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5'
      },
      {
        'img': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5kGbzZ08KO0TByfYGcyGKDa25kkuLNR5Ra4qQgFhsZI4L*U8ahTGHxGlo9.jvUyS09tUg27HXU61WEaH2raRmGc!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5',
        'title': '高频句型汇总',
        'like': 'cuIcon-like',
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5kGbzZ08KO0TByfYGcyGKDa25kkuLNR5Ra4qQgFhsZI4L*U8ahTGHxGlo9.jvUyS09tUg27HXU61WEaH2raRmGc!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5'
      },
      {
        'img': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5kGbzZ08KO0TByfYGcyGKDZkBucEZotpJpyEEbge1v6o7m*od7nOt9iiBTuQ3CfZTKCj170Q6ovEN7tRgzZUh7Y!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5',
        'title': '不定冠词a/an',
        'like': 'cuIcon-like',
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5kGbzZ08KO0TByfYGcyGKDZkBucEZotpJpyEEbge1v6o7m*od7nOt9iiBTuQ3CfZTKCj170Q6ovEN7tRgzZUh7Y!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5'
      }
    ],
    defaultImg: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU2NDMzOTgwMTc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2MzEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA1MTJtLTUxMiAwYTUxMiA1MTIgMCAxIDAgMTAyNCAwIDUxMiA1MTIgMCAxIDAtMTAyNCAwWiIgZmlsbD0iIzQyNEE2MCIgcC1pZD0iNjYzMiI+PC9wYXRoPjxwYXRoIGQ9Ik05MzQuNTIzNTg2IDgwMS4xMjExMDNDOTIyLjkyNDEzOCA2ODguMjg2ODk3IDgyNy42MDM4NjIgNjAwLjI3NTg2MiA3MTEuNjk3NjU1IDYwMC4yNzU4NjJoLTEwNC45Nzc2NTVBMjQuMDk5MzEgMjQuMDk5MzEgMCAwIDEgNTgyLjYyMDY5IDU3Ni4xNzY1NTJ2LTExLjM4NzU4NmMwLTEwLjI5Mjk2NiA2LjY5MTMxLTE5LjEwMjg5NyAxNi4zMzEwMzQtMjIuNzIyMjA3IDEwMi40NzA2MjEtMzguNTIzNTg2IDE3Mi42MzIyNzYtMjA2LjYzNjEzOCAxNTguMzg0NTUyLTMyNS40Mzc3OTNDNzQzLjg4MzAzNCAxMDQuNTAwOTY2IDY1Mi43MTE3MjQgMTQuMTQxNzkzIDU0MC40OTU0NDggMS41ODg5NjZhMjUxLjg1MTAzNCAyNTEuODUxMDM0IDAgMCAwLTI3LjEwMDY4OS0xLjU1MzY1NmwtMC44NDc0NDktMC4wMTc2NTVDMzc1Ljc5MDM0NS0wLjI4MjQ4MyAyNjQuODI3NTg2IDExMC40ODYwNjkgMjY0LjgyNzU4NiAyNDcuMTcyNDE0YzAgMTA2LjM1NDc1OSA2Ny4yMTMyNDEgMjYwLjUwMjA2OSAxNjEuNDU2NTUyIDI5NS4zNTMzNzkgOS4yMzM2NTUgMy40MDc0NDggMTUuMDk1MTcyIDEyLjU4ODEzOCAxNS4wOTUxNzIgMjIuNDM5NzI0djExLjIxMTAzNWMwIDEzLjMxMi0xMC43ODczMSAyNC4wOTkzMS0yNC4wOTkzMSAyNC4wOTkzMWgtMTA0Ljk3NzY1NWMtMTE1LjkwNjIwNyAwLTIxMS4yMjY0ODMgODguMDExMDM0LTIyMi44MjU5MzEgMjAwLjg0NTI0MUMxODEuNzI0NjkgOTM1LjY4ODgyOCAzMzYuNTI1MjQxIDEwMjQgNTEyIDEwMjRzMzMwLjI3NTMxLTg4LjMxMTE3MiA0MjIuNTIzNTg2LTIyMi44Nzg4OTd6IiBmaWxsPSIjRkJDRTlEIiBwLWlkPSI2NjMzIj48L3BhdGg+PHBhdGggZD0iTTU5MS4zMDcwMzQgMTE2LjcwMDY5YzY1LjU4ODk2NiAxOC4wMjU5MzEgMTI3LjM0Njc1OSA1OC4zNjggMTY2Ljg5NDM0NSAxMTEuNjE2LTAuMjgyNDgzLTMuOTAxNzkzLTAuNDA2MDY5LTcuODkxODYyLTAuODY1MTAzLTExLjcwNTM4Qzc0My44ODMwMzQgMTA0LjUwMDk2NiA2NTIuNzExNzI0IDE0LjE0MTc5MyA1NDAuNDk1NDQ4IDEuNTg4OTY2YTI1MS44NTEwMzQgMjUxLjg1MTAzNCAwIDAgMC0yNy4xMDA2ODktMS41NTM2NTZsLTAuODQ3NDQ5LTAuMDE3NjU1Yy0xMjIuMTczNzkzLTAuMjY0ODI4LTIyMy41MTQ0ODMgODguMTg3NTg2LTI0My43ODI2MiAyMDQuNDk5ODYyaDAuMDg4Mjc2YzMuMTYwMjc2IDQuNDQ5MTAzIDYuMjQ5OTMxIDguOTUxMTcyIDkuNjIyMDY4IDEzLjI0MTM4IDEuMjM1ODYyLTEuNTM2IDIuNDg5Mzc5LTMuMDU0MzQ1IDMuNzYwNTUyLTQuNTU1MDM1IDM1LjMxMDM0NS00Mi4wMTkzMSA5NC4yOTYyNzYtNTEuNzQ3MzEgMTQ0LjQ3MjI3Ni0yOS41MDE3OTNhMTIzLjU4NjIwNyAxMjMuNTg2MjA3IDAgMCAwIDE2NC41OTkxNzItNjcuMDAxMzc5eiIgZmlsbD0iIzZDNzk3QSIgcC1pZD0iNjYzNCI+PC9wYXRoPjxwYXRoIGQ9Ik05MzQuNTIzNTg2IDgwMS4xMjExMDNDOTIyLjkyNDEzOCA2ODguMjg2ODk3IDgyNy41ODYyMDcgNjAwLjI3NTg2MiA3MTEuNjk3NjU1IDYwMC4yNzU4NjJINjg4LjU1MTcyNGwtMTA1LjkzMTAzNCAxMDUuOTMxMDM1aC0xNDEuMjQxMzhsLTUyLjk2NTUxNy0zNS4zMTAzNDUtNjAuNTM5NTg2LTcwLjYyMDY5aC0xNS41NzE4NjJjLTExNS44ODg1NTIgMC0yMTEuMjI2NDgzIDg4LjAxMTAzNC0yMjIuODI1OTMxIDIwMC44NDUyNDFDMTgxLjcyNDY5IDkzNS42ODg4MjggMzM2LjUyNTI0MSAxMDI0IDUxMiAxMDI0czMzMC4yNzUzMS04OC4zMTExNzIgNDIyLjUyMzU4Ni0yMjIuODc4ODk3eiIgZmlsbD0iI0U3RUNFRCIgcC1pZD0iNjYzNSI+PC9wYXRoPjxwYXRoIGQ9Ik03NTkuMTcyNDE0IDk2MC4zMDAxMzhjMTIuMDkzNzkzLTYuNjkxMzEgMjMuODM0NDgzLTEzLjkyOTkzMSAzNS4zMTAzNDUtMjEuNTM5MzFWODI5Ljc5MzEwM2gtMzUuMzEwMzQ1djEzMC41MDcwMzV6TTI2NC44Mjc1ODYgOTYwLjMwMDEzOFY4MjkuNzkzMTAzaC0zNS4zMTAzNDV2MTA4Ljk2NzcyNWMxMS40NzU4NjIgNy42MDkzNzkgMjMuMjE2NTUyIDE0Ljg0OCAzNS4zMTAzNDUgMjEuNTM5MzF6IiBmaWxsPSIjQ0NENUQ2IiBwLWlkPSI2NjM2Ij48L3BhdGg+PHBhdGggZD0iTTQ1OS4wMzQ0ODMgNjcwLjg5NjU1MmgxMDUuOTMxMDM0djEwNS45MzEwMzRoLTEwNS45MzEwMzR6IiBmaWxsPSIjMzg0NTRGIiBwLWlkPSI2NjM3Ij48L3BhdGg+PHBhdGggZD0iTTQ0MC42OTA3NTkgMTAxOC45NTA2MjFjMjMuMzA0ODI4IDMuMjQ4NTUyIDQ3LjEwNCA1LjA0OTM3OSA3MS4zMDkyNDEgNS4wNDkzNzkgMjQuMzk5NDQ4IDAgNDguMzU3NTE3LTEuODE4NDgzIDcxLjgzODg5Ny01LjEyTDU0Ny4zMTAzNDUgNzc2LjgyNzU4NmgtNzAuNjIwNjlsLTM1Ljk5ODg5NiAyNDIuMTIzMDM1eiIgZmlsbD0iIzU0NkE3OSIgcC1pZD0iNjYzOCI+PC9wYXRoPjxwYXRoIGQ9Ik00NTkuMDM0NDgzIDY4NS4wMjA2OUwzODguNDEzNzkzIDYwMC4yNzU4NjJoLTg1LjczMzUxN2ExLjczMDIwNyAxLjczMDIwNyAwIDAgMC0xLjYwNjYyMSAyLjM2NTc5M0wzNzAuNzU4NjIxIDc3Ni44Mjc1ODZsODguMjc1ODYyLTU4Ljg0NDY4OVY2ODUuMDIwNjl6TTcyMS4zMTk3MjQgNjAwLjI3NTg2Mkg2MzUuNTg2MjA3bC03MC42MjA2OSA4NC43NDQ4Mjh2MzIuOTYyMjA3TDY1My4yNDEzNzkgNzc2LjgyNzU4Nmw2OS42NjczMTEtMTc0LjE4NTkzMWExLjcxMjU1MiAxLjcxMjU1MiAwIDAgMC0xLjU4ODk2Ni0yLjM2NTc5M3oiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjY2MzkiPjwvcGF0aD48L3N2Zz4=',
    starImg: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjU2NDMzNzYxODYxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzNzciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc2Mi42ODggMTAwNy45MzZjLTE2LjY0IDAtMzMuMTUyLTQuMTYtNDcuNzQ0LTEyLjAzMmwtMjAzLjk2OC0xMDkuODI0LTIwMy45MDQgMTA5LjgyNGMtMzMuMDg4IDE3LjYtNzQuNDk2IDE1LjIzMi0xMDQuODk2LTUuNTY4LTMxLjI5Ni0yMS41NjgtNDcuMzYtNTkuMzI4LTQxLjE1Mi05Ni4xMjhsMzkuOTM2LTIzOC42NTZMMjguNjcyIDQ4My40NTZDMi4xMTIgNDU3LjE1Mi02Ljc4NCA0MTguODggNS4yNDggMzgzLjY4IDE3LjM0NCAzNDguOCA0Ny43NDQgMzIzLjcxMiA4NC42NzIgMzE4LjI3MmwyMzQuNDk2LTM0Ljg4IDEwMS43Ni0yMTEuMzkyYzE2LjM4NC0zMy45ODQgNTEuNzc2LTU2IDkwLjA0OC01NiAzOC4zMzYgMCA3My42NjQgMjEuOTUyIDg5LjkyIDU2bDEwMS44ODggMjExLjM5MiAyMzQuNDMyIDM0Ljg4YzM2Ljk5MiA1LjQ0IDY3LjM5MiAzMC41MjggNzkuNDI0IDY1LjM0NCAxMi4wOTYgMzUuMjY0IDMuMTM2IDczLjQ3Mi0yMy4yOTYgOTkuODRsLTE3Mi40MTYgMTcyLjA5NiA0MC4wNjQgMjM4LjY1NmM2LjIwOCAzNi44NjQtOS45ODQgNzQuNjI0LTQxLjIxNiA5Ni4wNjRDODAyLjg4IDEwMDEuNzkyIDc4My4xNjggMTAwNy45MzYgNzYyLjY4OCAxMDA3LjkzNiIgcC1pZD0iNTM3OCIgZmlsbD0iI0YyQ0I1MSI+PC9wYXRoPjwvc3ZnPg=='
  },
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        // scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      });
    },
    like(e) {
      let index = e.currentTarget.dataset.index
      let changeICon = 'gramerCard[' + index + '].like'
      console.log(this.data.gramerCard[index].like)
      this.setData({
        [changeICon]: this.data.gramerCard[index].like == 'cuIcon-like' ? 'cuIcon-likefill text-red' : 'cuIcon-like'
      })
    },
    navToPage(e) {
      let index = e.currentTarget.dataset.index
      let poster = encodeURIComponent(this.data.gramerCard[index].poster)
      let title = encodeURIComponent(this.data.gramerCard[index].title)
      wx.navigateTo({
        url: `../found/grammerPage/grammerPage?poster=${poster}&title=${title}`,
      })
    }
  },
  lifetimes: {
    attached: async function () {
      const res = await db.collection('userInfo').get()
      this.setData({
        historyAccord: res.data.sort((itemx, itemy) => {
          return itemy.starTotal - itemx.starTotal;
        })
      })
      //已登录状态
      if (app.globalData.isLogin) {
        //获取个人排名
        let personalIndex = 0;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i]._openid == app.globalData.openId) {
            personalIndex = i;
            break;
          }
        }
        this.setData({
          userInfo: app.globalData.userInfo,
          starTotal: app.globalData.starTotal,
          yourIndex: personalIndex + 1
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