/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AppContainer from './src/routes/AppContainer'
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
      <View style={styles.container}>
        <AppContainer />
      </View>
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
