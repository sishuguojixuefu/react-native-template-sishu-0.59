// http://t.cn/AipSVR08
import CodePush from 'react-native-code-push'

const codePushStatusDidChange = syncStatus => {
  switch (syncStatus) {
    case CodePush.SyncStatus.UP_TO_DATE: // 已更新 0
      console.info(`[CodePush]${syncStatus}: 已更新`)
      break
    case CodePush.SyncStatus.INSTALLING_UPDATE: // 下载更新 1
      console.info(`[CodePush]${syncStatus}: 下载更新`)
      break
    case CodePush.SyncStatus.UPDATE_IGNORED: // 忽略更新 2
      console.info(`[CodePush]${syncStatus}: 忽略更新`)
      break
    case CodePush.SyncStatus.UNKNOWN_ERROR: // 未知错误 3
      console.info(`[CodePush]${syncStatus}: 未知错误`)
      break
    case CodePush.SyncStatus.SYNC_IN_PROGRESS: // 正在同步 4
      console.info(`[CodePush]${syncStatus}: 正在同步`)
      break
    case CodePush.SyncStatus.CHECKING_FOR_UPDATE: // 检查更新 5
      console.info(`[CodePush]${syncStatus}: 检查更新`)
      break
    case CodePush.SyncStatus.AWAITING_USER_ACTION: // 等待用户操作 6
      console.info(`[CodePush]${syncStatus}: 等待用户操作`)
      break
    case CodePush.SyncStatus.DOWNLOADING_PACKAGE: // 正在下载 7
      console.info(`[CodePush]${syncStatus}: 正在下载`)
      break
    case CodePush.SyncStatus.UPDATE_INSTALLED: // 更新下载 8
      console.info(`[CodePush]${syncStatus}: 更新下载`)
      break
    default:
      break
  }
}

/**
 * 安装更新并立刻重启应用
 */
const syncImmediate = () => {
  console.info('[CodePush]syncImmediate')
  CodePush.disallowRestart() // 禁止重启
  CodePush.sync({ installMode: CodePush.InstallMode.IMMEDIATE }, codePushStatusDidChange, progress => {
    console.info('[CodePush]codePushDownloadDidProgress: ', progress)
    if (progress.receivedBytes >= progress.totalBytes) {
      CodePush.allowRestart() // 强制更新
    }
  })
}

/**
 * 安装更新，但不立马重启，直到下一次重新进入
 */
const syncOnNextRestart = () => {
  console.info('[CodePush]syncOnNextSuspend')
  CodePush.sync({ installMode: CodePush.InstallMode.ON_NEXT_RESTART }, codePushStatusDidChange)
}

/**
 *安装更新，但是不立马重新启动，直到下一次从后台恢复到前台
 */
const syncOnNextResume = () => {
  console.info('[CodePush]syncOnNextSuspend')
  CodePush.sync({ installMode: CodePush.InstallMode.ON_NEXT_SUSPEND }, codePushStatusDidChange)
}

/**
 * 下一次处于后台时更新，不会有白屏
 */
const syncOnNextSuspend = () => {
  console.info('[CodePush]syncOnNextSuspend')
  CodePush.sync({ installMode: CodePush.InstallMode.ON_NEXT_SUSPEND }, codePushStatusDidChange)
}

export default { syncImmediate, syncOnNextRestart, syncOnNextResume, syncOnNextSuspend }
