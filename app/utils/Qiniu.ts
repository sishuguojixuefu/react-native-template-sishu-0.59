// 直传文件 http://t.cn/AiNDMAkW
// 存储上传下载域名 http://t.cn/AiNDLRRw
// React Native 上传图片至七牛云存储 http://t.cn/AiNDMIZZ
// 华北 https://upload-z1.qiniup.com
// 华东 https://upload.qiniup.com
// 华南 https://upload-z2.qiniup.com
import qiniu from '@sishuguojixuefu/react-native-qiniu'
import uuid from 'uuid'
/**
 * 直传文件
 * @param {string} filePath
 */
export const uploadFile = async (filePath, uploadToken) => {
  const uri = /^file:\/\/(.*)$/.exec(filePath)![1]
  const name = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2')
  // uploadFile(uri, token, formInput, onprogress)
  console.log(uri, uploadToken, name)
  const key = await qiniu.Rpc.uploadFile(
    uri, // 图片地址
    uploadToken, // 上传令牌
    {
      key: uuid.v4(), // 表示你资源上传到七牛云之后保存的文件名
      type: 'application/octet-stream', // 表示uri所代表的类型，此处为二进制流，上传文件一般都是二进制
      name,
      region: 'https://up-z1.qiniup.com',
    },
    resp => {
      console.log(resp)
    }
  )
  return `http://qiniu.sishuxuefu.com/${key}`
}

export default {
  uploadFile,
}
