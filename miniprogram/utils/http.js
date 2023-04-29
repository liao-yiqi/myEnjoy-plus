// 导入 http 模块
import http from "wechat-http";
// 配置基地址
http.baseURL = 'https://live-api.itheima.net'

// 响应拦截器
http.intercept.response = res => {
  return res.data
}

//全局使用
wx.http = http

//导出模块
export default http