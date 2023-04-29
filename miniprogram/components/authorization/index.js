// components/authorization/index.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    isLogin: false
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    // 组件进入页面时触发
    attached() {
      const app = getApp()
      this.setData({
        isLogin: app.token ? true : false
      })
      if (!this.data.isLogin) {
        // 不能单单返回登录页,需要带上当前本来的页面地址跳转
        const pageStack = getCurrentPages();
        // 取出当前页面的路径,登录成功后返回到当前页
        const currentPage = pageStack[pageStack.length - 1]
        const redirectURL = currentPage.route
        wx.redirectTo({
          url: `/pages/login/index?redirectURL=/${redirectURL}`,
        });
      }
    }
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})
