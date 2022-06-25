// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'database-2gt2op0zc763020f'
});

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  return {
    openId: wxContext.OPENID
  };
}