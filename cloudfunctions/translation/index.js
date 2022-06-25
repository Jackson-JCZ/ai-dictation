// 云函数入口文件
const {
  SHA256,
  enc
} = require('crypto-js');
const axios = require('axios').default;
// 云函数入口函数
exports.main = async (event, context) => {
  var result = [];
  for (let word of event.wordsList) {
    const salt = new Date().getTime();
    const appKey = '16fed0079a53d0f8';
    const key = 'CgyiG7H24dP0JiQPzMSeFNhBt8aG6O57';
    const curtime = Math.round(salt / 1000);
    const res = await axios.get('https://openapi.youdao.com/api', {
      params: {
        q: word,
        from: 'en',
        to: 'zh-CHS',
        appKey: appKey,
        salt: salt,
        sign: SHA256(appKey + word + salt + curtime + key).toString(enc.Hex),
        signType: 'v3',
        curtime: curtime
      }
    }).catch(console.error);
    if (res.status === 200 && res.data.errorCode === '0') {
      const {
        'data': {
          'basic': {
            explains,
            'uk-phonetic': phonetic
          }
        }
      } = res;

      // 裁切太长的翻译
      for (let i = 0; i < explains.length; i++) {
        if (explains[i][0] === '【') {
          explains.splice(i, 1);
          i--;
          break;
        }
        let arr = explains[i].split(/\（.+?\）/);
        arr = arr.join('').split('；').slice(0, 3);
        explains[i] = arr.join('；');
      }

      result.push({
        explains,
        phonetic
      });
    } else {
      result.push({});
    }
  }
  return result;
}