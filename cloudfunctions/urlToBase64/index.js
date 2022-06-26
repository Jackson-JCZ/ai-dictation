// 云函数入口文件
const request = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  // 获取用户头像的base64编码
  const avatarBuffer = await request({
    url: event.avatarUrl,
    method: 'GET',
    encoding: null
  }).catch(e => {
    console.error(e)
  });
  var avatarCode = '/icon/portrait.svg';
  if (avatarBuffer && avatarBuffer.length > 512) {
    avatarCode = 'data:image/png;base64,' + avatarBuffer.toString('base64');
  }
  return {
    avatarCode
  }
}