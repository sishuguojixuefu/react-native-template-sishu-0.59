import { createStackNavigator } from 'react-navigation'
import Routes from '~/routes/Routes'
import HomeScreen from '~/screens/HomeScreen'
import commonStackNavigatorConfig from '~/routes/commonStackNavigatorConfig'

const MainStack = createStackNavigator(
  {
    [Routes.HomeScreen]: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: '首页',
      },
    },
  },
  {
    initialRouteName: Routes.HomeScreen,
    ...commonStackNavigatorConfig,
  }
)

export default MainStack
