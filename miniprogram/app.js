// app.js
import './utils/utils'
import './utils/http'
App({
  globalData: {},
  token: '',
  onLaunch() {
    this.getToken()
  },
  getToken() {
    this.token = wx.getStorageSync('token');
  }
})
