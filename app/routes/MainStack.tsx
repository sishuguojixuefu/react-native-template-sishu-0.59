import { createStackNavigator } from 'react-navigation'
import Routes from '~/routes/Routes'
import HomeScreen from '~/screens/HomeScreen'
import commonNavigationOption from '~/routes/commonNavigationOption'

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
    ...commonNavigationOption,
  }
)

export default MainStack
