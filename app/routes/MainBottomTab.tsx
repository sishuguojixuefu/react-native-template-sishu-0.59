import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import HomeStack from '~/routes/HomeStack'
import theme from '~/theme'

const MainBottomTab = createBottomTabNavigator(
  {
    首页: HomeStack,
  },
  {
    initialRouteName: '首页',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case '首页':
            return (
              <Image
                source={focused ? require('~/images/home_focused.png') : require('~/images/home.png')}
                style={{ width: 20, height: 20 }}
              />
            )
          default:
            return null
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: theme.brand_primary,
      inactiveTintColor: 'gray',
    },
  }
)
const Stacks = [HomeStack]
Stacks.forEach(item => {
  item.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
    return {
      tabBarVisible,
    }
  }
})

export default MainBottomTab
