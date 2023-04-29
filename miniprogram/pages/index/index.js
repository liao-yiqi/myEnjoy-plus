Page({
  data: {
    notifyDetail: []
  },

  onLoad() {
    this.getNotifyDetail()

  },
  async getNotifyDetail() {
    const { code, data: notifyDetail } = await wx.http({
      url: '/announcement'
    })
    if (code !== 10000) wx.utils.total()
    this.setData({ notifyDetail })
  }
})
