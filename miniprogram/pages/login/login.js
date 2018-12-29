// miniprogram/pages/login/login.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:null,
    avatarUrl:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ nickName: wx.getStorageSync('NICKNAME') })
    this.setData({ avatarUrl: wx.getStorageSync('AVATARURL') })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 登录  
  doLogin: function (e) {
    //console.log(e.detail.errMsg)
    //console.log(e.detail.userInfo)
    //console.log(e.detail.rawData)

    wx.login({
      success: function (res) {
        //console.log(res)
        // 获取登录的临时凭证
        var code = res.code;
        // 调用后端，获取微信的session_key, secret
  
        wx.request({
          url: app.globalData.url + "wxLogin?code=" + code,
          method: "POST",
          success: function (result) {
            //console.log(result);
            // 保存用户登录信息到本地缓存，可以用作小程序端的拦截器
            app.setLoginInfo(result.data.content.session_key,
                      result.data.content.openid,
                      e.detail.userInfo.nickName,
                      e.detail.userInfo.avatarUrl);
            //this.setData({nickName: e.detail.userInfo.nickName})
            //this.setData({avatarUrl: e.detail.userInfo.avatarUrl})

            wx.redirectTo({
              url: '/pages/login/login',
            })

          }
        })
      }
    })
  }

})