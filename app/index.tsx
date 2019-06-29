/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 */

import React, { Component } from 'react'
import { Provider as ThemeProvider } from '@sishuguojixuefu/antd-mobile-rn'
import { Provider as MobxProvider } from 'mobx-react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { getCurrentRoute } from '~/utils/Navigation'
import AppContainer from '~/routes/AppContainer'
import appStore from '~/stores/appStore'

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
      <MobxProvider>
        <ThemeProvider>
          <StatusBar backgroundColor="#0BA5F6" barStyle="light-content" />
          <View style={styles.container}>
            <AppContainer
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
        </ThemeProvider>
      </MobxProvider>
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
