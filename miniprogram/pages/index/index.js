Page({
  data: {
    notifyList: []
  },

  onLoad() {
    this.getNotifyList()

  },
  async getNotifyList() {
    const { code, data: notifyList } = await wx.http({
      url: '/announcement'
    })
    if (code !== 10000) wx.utils.total()
    this.setData({ notifyList })
  }
})
