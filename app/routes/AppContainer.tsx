import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Routes from '~/enum/Routes'
import AuthLoadingScreen from '~/routes/AuthLoadingScreen'
import MainStack from '~/routes/MainStack'

export default createAppContainer(
  createSwitchNavigator(
    {
      [Routes.AuthLoadingScreen]: AuthLoadingScreen,
      [Routes.MainStack]: MainStack,
    },
    {
      initialRouteName: Routes.AuthLoadingScreen,
    }
  )
)
