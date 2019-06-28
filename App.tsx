/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the sishu template
 * https://github.com/sishuguojixuefu/react-native-template-sishu
 */
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'mobx-react'
import AppStore from './src/stores/AppStore'
import AppContainer from './src/routes'

class App extends Component {
  public render() {
    return (
      <Provider appStore={new AppStore()}>
        <View style={styles.container}>
          <AppContainer />
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
