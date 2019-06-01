/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 *
 * @format
 */

import { Provider as AntdProvider } from '@sishuguojixuefu/antd-mobile-rn'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AppContainer from './src/routes'

interface Props {}
class App extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <AntdProvider>
          <AppContainer />
        </AntdProvider>
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
