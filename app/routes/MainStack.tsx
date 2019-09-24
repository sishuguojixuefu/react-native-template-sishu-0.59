import { createStackNavigator } from 'react-navigation'
import Routes from '~/routes/Routes'
import commonStackNavigatorConfig from '~/routes/commonStackNavigatorConfig'
import MainBottomTab from '~/routes/MainBottomTab'

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
