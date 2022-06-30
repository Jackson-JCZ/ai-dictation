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
        'poster': 'http://m.qpic.cn/psc?/V53HUzqu1STio82SCfOY2wZWaR1AsHvj/ruAMsa53pVQWN7FLK88i5opa4TzNhmATHj4Bwp7*DYLytIdkPpUht6wmMLMCI.M9ltoc*2EXGs70Xz6rQoT6mO*OuNoxdo24LFIsXKs*CSc!/b&bo=AAIAAgAAAAADNxI!&rf=viewer_4&t=5',
        'text': `人称代词主格趣记歌

        I 是我；you 是你；he，she ，it 他她它；I 的复数是个 we；you 的复数还是 you；男他女她动物它，张三李四单个他，他们的复数都是 they；简单口诀要牢记，要牢记。
        
        人称代词主格宾格之歌
        
        I 是主格 me 是宾，请你一定记在心；主格用在动词前，动词介词后用宾。
        
        you 是主格，也是宾；he 是主格 him 是宾， she 是主格 her 是宾， it 是主格，也是宾， we 是主格 us 是宾， you 是主格，也是宾， they 是主格 them 是宾。
        
        2.be动词用法歌
        
        我用am，你用are，is连接他，她，它。
        
        单数名词用is，复数名词全用are。变疑问，往前提，句末问号莫丢弃。
        
        变否定，更容易，be后not莫忘记。疑问否定任你变，句首大写莫迟疑。
        
        3.疑问词的用法
        
        疑问词放句首，what 什么；where 哪里；when 问时间；
        
        how 怎样；要问原因为什么，why 放句首就可以；
        
        疑问句有点难，勤做笔记多思考，遇问题别着急，先思考来后提问。
        
        4.特殊疑问句用法
        
        What用途广，要问“什么”它当先。（What’s this?）
        
        How开头来“问安”。(How are you?)
        
        Who问“谁”。（Who’s that man?）
        
        “谁的”Whose来承担。（Whose eraser is this?）
        
        询问“某地”用Where。（Where is her cat?）
        
        “哪一个”Which句首站。（Which one?）
        
        5.祈使句用法
        
        祈使句，祈使句，请求、命令或建议。主语是you常省去，动词原形开头记。
        
        否定形式要注意，句首要把Don’t加。要讲客气用please，句首句末没关系。
        
        6.动词加-s或-es方法歌诀
        
        动词三单现在式，一般词尾加-s。
        
        s, x, ch, sh在词尾，直接加上-es。
        
        词尾若是字母o，加上-es不用愁。
        
        “辅音字母+y“来结尾，变y为i是正规。
        
        -es后边紧跟随，study→studies看明白。
        
        7.过去式之歌
        
        标准过去式加-ed，少量不规则分别记，
        
        am和is对was，二人称复数are变were，
        
        have和has用had，do和does变did。
        
        规则动词过去式构成方法口诀
        
        过去式构成有方法，一般词尾把-ed加。
        
        如果词尾有个e，直接加d就可以。
        
        “辅音字母+y”在词尾，变y为i加ed。
        
        “一辅重闭”作尾巴，双写之后-ed加。
        
        8.现在进行时用法
        
        主语在句首，am, is, are跟在后，
        
        现在分词跟着走，其他成分不可丢。
        
        表示动作正进行，句中now时间定。
        
        一般问句，把be提到句前去。
        
        否定句式也简单，be后只把not添。
        
        9.have/has的用法口诀
        
        动词have表示“有”，位置就在主语后。
        
        “三单”主语用has，其他人称用have。
        
        10.There be句型用法口诀
        
        There be句型有特点，主语放在be后边。
        
        主语单数用is，复数主语要用are。
        
        变否定，很简单，be后要把not添。
        
        变问句也不难，把be提到there前。
        
        肯定句中用some，否定/疑问要用any换。
        
        11.变一般疑问
        
        口诀之一
        
        （一）can 、be、do、does在前
        
        （二）第一（人称）变第二（人称）
        
        （三）末尾用问号，语调用升调
        
        （四）有some变any
        
        口诀之二
        
        （一） 有can有be，can、be提前
        
        （二） 没有can、be的，do、does显身手，三单用does，does后动词还原
        
        （三） 其他人称do在前
        
        12.变否定句
        
        口诀之一
        
        （一） can、be、do、does后面not添
        
        （二） 有some变any
        
        诀之二
        
        （一）有can有be，can、be后面not添
        
        （二）没有can、be、do、does显身手，单三用doesn’t，doesn’t后面动还原
        
        （三） 其他人称don’t动词前`
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
      let text = encodeURIComponent(this.data.gramerCard[index].text)
      wx.navigateTo({
        url: `../found/grammerPage/grammerPage?poster=${poster}&title=${title}&text=${text}`,
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