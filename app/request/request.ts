/* eslint guard-for-in:0 no-restricted-syntax:0 */
import axios from 'axios'
import qs from 'qs'

const filterParam = obj => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      filterParam(obj[key]) // 递归遍历
    }

    if ((Array.isArray(obj[key]) && obj[key].length === 0) || !obj[key]) {
      delete obj[key]
    }
  }
  return obj
}

// 中文文档: http://t.cn/ROfXFuj
// 创建实例
const request = axios.create({
  baseURL: '', // TODO: 配置baseURL
  timeout: 10000,
  headers: { platform: 'app' },
})

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // 过滤空字段
    filterParam(config.headers)
    config.data && filterParam(config.data)
    config.params && filterParam(config.data)
    if (config.method === 'get') {
      config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' })
    }
    return config
  },
  error => {
    // TODO: 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    console.log('响应数据：', response)
    const { data } = response
    return data
  },
  error => {
    // TODO: 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
