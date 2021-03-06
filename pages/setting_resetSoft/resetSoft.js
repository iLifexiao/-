const util = require('../../utils/util.js')
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userKey: "",
    checkKey: ""
  },

  checkUserKey: function(e) {
    this.setData({
      checkKey: e.detail.value
    })
    //收起键盘
    util.hideKeyboard(e.detail.value, 6)
  },

  resetSoft: function() {
    if (util.isEmptyInput(this.data.checkKey, '请验证身份')) {
      return
    }

    const checkKey = this.data.checkKey
    // 确认密码
    if (checkKey == this.data.userKey) {
      this.clearAllData()
    } else {
      wx.showToast({
        title: '密码错误',
        image: "/images/error.png"
      })
    }
  },

  clearAllData: function() {
    // 全局信息
    app.globalData = {
      userKey: [],
      secret: {},
      accountClassify: [],
      accountList: [],
      supportFinger: '0',
      openFingerPrint: '0'
    }

    // 保存的文件
    wx.getSavedFileList({
      success: res => {
        res.fileList.forEach(function(icon, index) {
          wx.removeSavedFile({
            filePath: icon.filePath,
            complete: function(res) {
              console.log(res)
            }
          })
        })
      }
    })

    // 缓存
    try {
      wx.clearStorageSync()
      wx.navigateBack({
        complete: res => {
          wx.showToast({
            title: '重置完成',
          })
        }
      })
    } catch (e) {
      wx.hideLoading()
      wx.showToast({
        title: '重置失败',
        image: "/images/error.png"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const userKeyArray = app.globalData.userKey
    var userKey = userKeyArray.join("")
    this.setData({
      userKey: userKey,
    })
  }
})