const utils = {
  total(title = '数据加载失败') {
    wx.showToast({
      title,
      icon: 'none',
      mask: false,
    });

  }
}
wx.utils = utils
export default utils