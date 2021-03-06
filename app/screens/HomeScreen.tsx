/* eslint-disable no-useless-concat */
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import BaseScreen, { BaseScreenProps } from '~/screens/BaseScreen'
import appStore from '~/stores/appStore'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

interface Props extends BaseScreenProps {}

@observer
class HomeScreen extends BaseScreen<Props, any> {
  constructor(props) {
    super(props)
    // 标识当前页面
    appStore.setCurrentRoute({
      screenName: 'HomeScreen',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
})

export default HomeScreen
