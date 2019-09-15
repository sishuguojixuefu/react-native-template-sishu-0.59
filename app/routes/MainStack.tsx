import { createStackNavigator } from 'react-navigation'
import Routes from '~/routes/Routes'
import MainBottomTab from '~/routes/MainBottomTab'
import commonStackNavigatorConfig from '~/routes/commonStackNavigatorConfig'

const MainStack = createStackNavigator(
  {
    [Routes.MainBottomTab]: {
      screen: MainBottomTab,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: Routes.MainBottomTab,
    ...commonStackNavigatorConfig,
  }
)

export default MainStack
