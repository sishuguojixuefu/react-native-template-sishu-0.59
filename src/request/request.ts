import axios from 'axios'
// 中文文档: http://t.cn/ROfXFuj
// 创建实例
const request = axios.create({
  baseURL: '', // 配置baseURL
  timeout: 10000,
  headers: { platform: 'app' },
})

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
