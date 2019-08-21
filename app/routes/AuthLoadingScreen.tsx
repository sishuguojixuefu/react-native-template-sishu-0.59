import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import { observer } from 'mobx-react'
import SplashScreen from 'react-native-splash-screen'
import BaseScreen, { BaseScreenProps } from '~/screens/BaseScreen'
import theme from '~/theme'

@observer
class AuthLoadingScreen extends BaseScreen<BaseScreenProps, any> {
  constructor(props: BaseScreenProps) {
    super(props)
    SplashScreen.hide()
  }

  // 判断是否登录
  judgeLogin = async () => {}

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.brand_primary} />
        <Text style={{ color: theme.brand_primary }}>登录校验中...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AuthLoadingScreen
