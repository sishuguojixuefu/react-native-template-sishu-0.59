## 如何隐藏 header

隐藏 StackNavigator 下所有页面的 header：

```js
// createStackNavigator(RouteConfigs, StackNavigatorConfig)
createStackNavigator(RouteConfigs, {
  headerMode: 'none', // add this props
})
```

隐藏导航器内部页面的 navigationOptions：

```js
// createStackNavigator(RouteConfigs, StackNavigatorConfig)
createStackNavigator(
  {
    HelloScreen: {
      screen: HelloScreen,
      navigationOptions: {
        header: null, // add this props
      },
    },
  },
  StackNavigatorConfig
)
```
