var WXBizDataCrypt = require('../detail/WXBizDataCrypt.js');
// pages/main/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picname:"../../pic/pic1.png",
    items: [
      { name: 'USA', value: '美国', checked: 'true'},
      { name: 'CHN', value: '中国'}
    ] 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getUserInfo({
    //   data: { withCredentials:true},
    //   success: function(res){
    //     console.log(app);
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              // var iv = res.iv;
              // var appId = "wx6cfbf77416fab158";
              // var sessionKey = 'tiihtNczf5v6AKRyjwEUhQ=='
              // var encryptedData = res.encryptedData;
              // var WXBizDataCrypt = require('./WXBizDataCrypt');
              // var pc = new WXBizDataCrypt(appId, sessionKey);
              // var data = pc.decryptData(encryptedData, iv);
              // console.log("解密结果");
              
            }
          })
        }
      }
    })
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
  radioChange: function (e) {
    if (e.detail.value == "USA"){
      this.setData({
        picname:"../../pic/pic1.png"
      })
    } else {
      this.setData({
        picname: "../../pic/pic2.png"
      })
    }
  }
})