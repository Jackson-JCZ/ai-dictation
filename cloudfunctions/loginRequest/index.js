// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = cloud.database();
const request = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  if (event.avatarUrl) {
    // 存储用户头像
    var avatarBuffer = await request({
      url: event.avatarUrl,
      method: 'GET',
      encoding: null
    }).catch(e => {
      console.error(e)
    });
    const {
      fileID
    } = await await cloud.uploadFile({
      cloudPath: 'userAvatar/' + event.openId + '.png',
      fileContent: avatarBuffer
    }).catch(e => {
      console.error(e)
    });
    // 更新数据库记录
    db.collection('userInfo').where({
      _openid: event.openId
    }).update({
      data: {
        fileID: fileID
      }
    }).then(res => {
      console.log(res)
    })
  }
  const wxContext = cloud.getWXContext();
  return {
    openId: wxContext.OPENID
  };
}