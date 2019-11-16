## 1、app 启动时静默同步

最简单的，默认的行为。你的 App 将自动下载可用的更新，并且在 App 下次重启时应用更新：

```js
import CodePush from 'react-native-code-push'

// 这里的配置是默认配置，可以不写
@CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
})
class App extends Component {}

export default App
```

> 高阶组件在内部的 `componentDidMount` 生命周期中调用[sync](https://github.com/microsoft/react-native-code-push/blob/master/docs/api-js.md#codepushsync)方法，依次执行更新检查，下载更新（如果存在）并为您安装更新。

## 2、app 每次从后台恢复时静默同步

```js
import CodePush from 'react-native-code-push'

// 从后台恢复到前台时检查更新，如果有可用更新则应用更新
@CodePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
})
class App extends Component {}

export default App
```

## 3、交互

当有可用更新时，在下载之前提示用户授权，然后立即应用更新。如果一个更新被以 mandatory 标志发布，用户将依然被提示，但是这时用户不能忽略。

```js
import CodePush from 'react-native-code-push'

@CodePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
})
class App extends Component {}

export default App
```

## 4、打印或展示进度

```js
@CodePush()
class App extends Component {
  codePushStatusDidChange(syncStatus) {
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

  codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + ' of ' + progress.totalBytes + ' received.')
  }
}
export default MyApp
```

- [React Native 热更新方案](https://cloud.tencent.com/developer/article/1038740)
- [React Native 使用 Code-Push 更新 APP](https://www.jianshu.com/p/87ccfb795635)
- [React Native 应用部署/热更新-CodePush 最新集成总结(新)](http://1t.click/betj)
