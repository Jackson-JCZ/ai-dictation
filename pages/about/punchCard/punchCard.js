wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = wx.cloud.database();
const app = getApp();

Page({
  data: {
    historyPunch: []
  },
  punch(e) {
    wx.navigateTo({
      url: '../../chooseWord/dictation/complete/complete',
    })
  },

  onLoad: async function () {
    const punch = app.globalData.punch;
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();

    // 获取最近5次打卡记录
    var historyPunch = [],
      todayPuch = false;
    for (let i = 0; i < 5 && i < punch.length; i++) {
      const [, punchY, punchM, punchD] = punch[i].split(/[ymd]/)
      if (year == punchY && punchM == month) {
        if (punchD == day) {
          todayPuch = true;
          continue;
        } else if (punchD == day - 1) {
          historyPunch.push('昨日');
          continue;
        }
      }
      historyPunch.push(`${punchM}月${punchD}日`);
    }
    if (!todayPuch) { // 今天还没打卡
      punch.unshift(`y${year}m${month}d${day}`);
      app.globalData.punch = punch;
      // 写入数据库
      await db.collection('userInfo').where({
        _openid: app.globalData.openId
      }).update({
        data: {
          punch
        }
      });
    }

    // 本月打卡天数
    var accumulateDays = 1;
    for (let i = 1; i < punch.length; i++) {
      if (punch[i].split(/[md]/)[1] == month) {
        accumulateDays++;
      } else {
        break;
      }
    }

    this.setData({
      accumulateDays,
      historyPunch
    });
  },

  onShareAppMessage: async function () {
    // 连续打卡天数
    var durationDays = 1,
      tTime = new Date(new Date() - 86400000),
      punch = app.globalData.punch;
    for (let i = 1; i < punch.length; i++) {
      const [, punchY, punchM, punchD] = punch[i].split(/[ymd]/)
      if (punchY == tTime.getFullYear() && punchM == tTime.getMonth() + 1 && punchD == tTime.getDate()) {
        durationDays++;
        tTime = new Date(tTime - 86400000);
      } else {
        break;
      }
    }
    var calendar = this.selectComponent('#calendar');
    if (!calendar.data.open) {
      calendar.openChange();  // 展开日历
      await new Promise(function (resolve) {  // 等待一段时间，防止日历未展开
        setTimeout(resolve, 300);
      })
    }
    calendar.switchNowDate();  // 切换今日

    return {
      'title': `我在小学英语教育小程序连续打卡${durationDays}天，一起来学习吧!`,
      path: '/pages/home/home'
    }
  }
})