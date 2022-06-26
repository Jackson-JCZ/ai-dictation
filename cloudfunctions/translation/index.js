// 云函数入口文件
const {
  SHA256,
  enc
} = require('crypto-js');
const axios = require('axios').default;
// 云函数入口函数
exports.main = async (event, context) => {
  var result = [],
    pList = [];
  const appKey = '16fed0079a53d0f8';
  const key = 'CgyiG7H24dP0JiQPzMSeFNhBt8aG6O57';

  const getRequest = function (word, appKey, key) {
    const salt = new Date().getTime();
    const curtime = Math.round(salt / 1000);
    return axios.get('https://openapi.youdao.com/api', {
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
  }

  for (let word of event.wordsList) {
    pList.push(getRequest(word, appKey, key));
  }
  const res = await Promise.all(pList);
  // 最大请求次数3
  var retry = 3;
  for (let i = 0; i < res.length; i++) {
    if (res[i] && res[i].status === 200 && res[i].data.errorCode === '0' && res[i].data.isWord) {
      const {
        'data': {
          'basic': {
            explains,
            'uk-phonetic': phonetic
          }
        }
      } = res[i];

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
      // 重新请求，最多请求3次
      if (retry > 0) {
        res[i] = await getRequest(event.wordsList[i], appKey, key);
        i--;
        retry--;
      } else {
        result.push({});
        retry = 3;
      }
    }
  }
  return result;
}