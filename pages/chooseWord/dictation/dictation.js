// pages/chooseWord/dictation/dictation.js
const app = getApp();
wx.cloud.init({
  env: 'database-2gt2op0zc763020f'
});
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: "",
    phonetic: '',
    explains: '',
    wordList: [],
    inputIndex: [0, 0], // [0]表示第几组，[1]表示第几个
    inputFocus: true,
    showPhonetic: false,
    showExplains: false,
    showRight: false,
    wordsList: [],
    wordsData: [],
    indexArr: [],
    currentWordIndex: 0,
    showAnswerModal: false, // 展示答案
    showAnswer: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var wordsList = app.globalData.wordsList,
      wordsData = app.globalData.wordsData;

    // 打乱单词列表
    var indexArr = Array(wordsList.length).fill().map((v, i) => i);
    indexArr.sort(function () {
      return .5 - Math.random();
    });

    this.setData({
      wordsList: wordsList,
      wordsData: wordsData,
      indexArr: indexArr
    })

    // 播放音频
    this.audioCtx = wx.createInnerAudioContext({
      useWebAudioImplement: true
    })
    this.audioCtx.autoplay = true;

    // 更新当前单词
    this.updateCurrentWord();

    // 答对音频
    this.audioCtx2 = wx.createInnerAudioContext();
    this.audioCtx2.src = '/music/bingo.mp3';
  },

  /* 更新当前单词 */
  updateCurrentWord: async function () {
    var index = this.data.indexArr[this.data.currentWordIndex];
    if (index === undefined) { // 学完了
      // 更新学习记录和星星数
      if (app.globalData.openId) {
        let history = app.globalData.history,
          starTotal = app.globalData.starTotal,
          wordsList = this.data.wordsList,
          wordsData = this.data.wordsData;

        let time = new Date();
        const date = (time.getMonth() + 1) + '/' + time.getDate();
        let words = [];
        for (let i = 0; i < wordsList.length; i++) {
          words.push(`${wordsList[i]} [${wordsData[i].phonetic}]`)
          for (let explain of wordsData[i].explains) {
            words[i] += ' ' + explain;
          }
        }
        if (history.length) {
          const [month, day] = history[0]['date'].split('/');
          if (time - new Date(`${time.getFullYear()}-${month}-${day}`).getTime() > 86400000) {
            history.unshift({
              'date': date,
              'words': words
            });
          } else {
            history[0].words = words.concat(history[0].words);
          }
        } else {
          history = [{
            'date': date,
            'words': words
          }]
        }

        starTotal += wordsList.length;

        app.globalData.history = history;
        app.globalData.starTotal = starTotal;
        await db.collection('userInfo').where({
          _openid: app.globalData.openId
        }).update({
          data: {
            history,
            starTotal
          }
        });
      }
      wx.navigateTo({
        url: './complete/complete',
      });
      return;
    }
    var word = this.data.wordsList[index];
    var arr = word.split(' '),
      arr2 = [],
      str = '';
    for (let item of arr) {
      if (!str || str.length + item.length < 13) {
        str += ' ' + item;
      } else {
        if (str[0] === ' ') {
          str = str.slice(1);
        }
        arr2.push(str);
        str = item;
      }
    }
    if (str[0] === ' ') {
      str = str.slice(1);
    }
    arr2.push(str);

    // 翻译和发音
    const {
      phonetic,
      explains
    } = this.data.wordsData[index];

    this.setData({
      word: word,
      wordList: arr2,
      inputWord: Array(arr2.length).fill().map(() => []),
      phonetic: phonetic,
      explains: explains
    });

    // 音频
    this.audioCtx.src = 'http://dict.youdao.com/dictvoice?type=0&audio=' + word;
  },

  inputWord(e) {
    this.startInput();
    var inputIndex = this.data.inputIndex;
    var inputWord = this.data.inputWord;
    const {
      value,
      keyCode
    } = e.detail;
    console.log(keyCode)
    if (keyCode === 8) {
      // 删除
      if (inputIndex[1] === 0) {
        if (inputIndex[0] > 0) {
          inputIndex[0]--;
          inputIndex[1] = this.data.wordList[inputIndex[0]].length - 1;
        }
      } else {
        inputIndex[1]--;
        if (this.data.wordList[inputIndex[0]][inputIndex[1]] === ' ') {
          inputIndex[1]--;
        }
      }
      inputWord[inputIndex[0]][inputIndex[1]] = '';
      this.setData({
        inputWord: inputWord,
        inputIndex: inputIndex
      })
    } else if ((keyCode !== 39 && keyCode < 65) || (keyCode > 90 && keyCode < 97) || keyCode > 122) {
      // 空格或非字母
      return;
    } else {
      // 添加
      if (inputIndex[1] < this.data.wordList[inputIndex[0]].length - 1) {
        inputWord[inputIndex[0]][inputIndex[1]] = value.slice(-1);
        inputIndex[1]++;
        if (this.data.wordList[inputIndex[0]][inputIndex[1]] === ' ') {
          inputIndex[1]++;
        }
      } else {
        if (inputIndex[0] < this.data.wordList.length - 1) {
          inputWord[inputIndex[0]][inputIndex[1]] = value.slice(-1);
          inputIndex[0]++;
          inputIndex[1] = 0;
        } else {
          let t = this.data.wordList[inputIndex[0]].length;
          if (t === inputIndex[1]) {
            return;
          }
          inputWord[inputIndex[0]][inputIndex[1]] = value.slice(-1);
          inputIndex[1]++;
        }
      }
      this.setData({
        inputWord: inputWord,
        inputIndex: inputIndex
      })
    }
    console.log(inputWord)
  },

  startInput() {
    this.setData({
      inputFocus: true
    });
  },
  endInput() {
    // 失焦
    this.setData({
      inputFocus: false
    });
  },
  play() {
    this.audioCtx.play();
  },

  /* 展现提示 */
  tip() {
    if (!this.data.showPhonetic && this.data.phonetic) {
      this.setData({
        showPhonetic: true
      })
    } else if (!this.data.showExplains && this.data.explains) {
      this.setData({
        showExplains: true
      })
    } else {
      this.setData({
        showAnswerModal: true
      })
    }
  },

  hideModal() {
    this.setData({
      showAnswerModal: false
    })
  },
  clickAnswer() {
    this.setData({
      showAnswer: true,
      inputWord: this.data.wordList
    })
    this.hideModal();
  },

  submit() {
    if (this.data.showAnswer) {
      // 查看了答案，直接跳过
      this.setData({
        showRight: true,
        currentWordIndex: this.data.currentWordIndex + 1,
        showRight: false,
        showPhonetic: false,
        showExplains: false,
        inputIndex: [0, 0],
        showAnswer: false
      });
      this.updateCurrentWord();
      return;
    }

    const inputIndex = this.data.inputIndex,
      wordList = this.data.wordList,
      inputWord = this.data.inputWord;
    if (inputIndex[0] === wordList.length - 1 && inputIndex[1] === wordList[wordList.length - 1].length) {
      console.log('yes')
    } else {
      wx.showToast({
        title: '还没填写完哦！',
        icon: 'none'
      });
      return;
    }
    // 合并输入
    var word = '';
    for (let item of inputWord) {
      word += item.join('');
    }
    if (word === this.data.word.replaceAll(' ', '')) {
      // 答对
      this.setData({
        showRight: true,
        currentWordIndex: this.data.currentWordIndex + 1
      });
      this.audioCtx2.play(); // 播放答对音频
      let that = this;
      setTimeout(() => {
        that.updateCurrentWord(); // 更新单词
        that.setData({
          showRight: false,
          showPhonetic: false,
          showExplains: false,
          inputIndex: [0, 0]
        });
      }, 1500);
    } else {
      wx.showToast({
        title: '答错啦，再想想吧！',
        icon: 'none'
      });
    }
  }
})