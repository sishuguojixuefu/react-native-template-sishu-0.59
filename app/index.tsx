/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 */

import React, { Component } from 'react'
import { Provider } from '@sishuguojixuefu/antd-mobile-rn'
import { StyleSheet, View, StatusBar } from 'react-native'
import { getCurrentRoute, setTopLevelNavigator } from '~/utils/NavigationService'
import AppContainer from '~/routes/AppContainer'
import appStore from '~/stores/appStore'
import theme from '~/theme'

class App extends Component {
  constructor(props) {
    super(props)
    // 标识当前页面
    appStore.setCurrentRoute({
      screenName: 'App.tsx',
    })
  }

  render() {
    return (
      <Provider theme={theme}>
        <StatusBar backgroundColor={theme.brand_primary} barStyle="light-content" />
        <View style={styles.container}>
          <AppContainer
            ref={navigatorRef => {
              setTopLevelNavigator(navigatorRef)
            }}
            onNavigationStateChange={(prevState, currentState) => {
              const prevScreen = getCurrentRoute(prevState)
              const currentScreen = getCurrentRoute(currentState)
              if (currentScreen && prevScreen !== currentScreen) {
                appStore.setCurrentRoute({
                  screenName: currentScreen.routeName,
                  routeInfo: currentScreen,
                })
              }
            }}
          />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
})

export default App
