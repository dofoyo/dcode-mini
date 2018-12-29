//app.js
App({
  onLaunch: function (options) {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    var openId = wx.getStorageSync('OPENID')
    var sessionId = wx.getStorageSync('SESSIONID')
    var expiredTime = wx.getStorageSync('EXPIREDTIME')
    var now = +new Date()
    if (now - expiredTime <= 1000 * 24 * 60 * 60 * 1000) {
      this.globalData.sessionId = sessionId
      this.globalData.expiredTime = expiredTime
    }
  },

  setLoginInfo: function (sessionId,openId,nickName,avatarUrl){
    //console.log(sessionId)

    // 把 SessionId 和过期时间放在内存中的全局对象和本地缓存里边
    this.globalData.sessionId = sessionId
    wx.setStorageSync('SESSIONID', sessionId)
    
    this.globalData.openId = openId
    wx.setStorageSync('OPENID', openId)
    
   // this.globalData.nickName = nickName
    wx.setStorageSync('NICKNAME', nickName)
    
   // this.globalData.avatarUrl = avatarUrl
    wx.setStorageSync('AVATARURL', avatarUrl)

      // 假设登录态保持100天
    var expiredTime = +new Date() + 100 * 24 * 60 * 60 * 1000
    this.globalData.expiredTime = expiredTime
    wx.setStorageSync('EXPIREDTIME', expiredTime)
  },

  globalData:{
    openId:null,
    sessionId: null,
    expiredTime: 0,
    url: 'http://118.24.162.174:8066/'
  }
})
