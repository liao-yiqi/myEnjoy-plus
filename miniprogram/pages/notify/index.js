// pages/notify/index.ts
Page({

  data: {
    notifyDetail: []
  },
  onLoad({ id }) {
    this.getNotifyDetail(id)
  },
  async getNotifyDetail(id) {
    const { data: notifyDetail } = await wx.http({
      url: `/announcement/${id}`
    })
    this.setData({ notifyDetail })
  }
})