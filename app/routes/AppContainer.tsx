import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Routes from '~/routes/Routes'
import MainStack from '~/routes/MainStack'

export default createAppContainer(
  createSwitchNavigator(
    {
      [Routes.MainStack]: MainStack,
    },
    {
      initialRouteName: Routes.MainStack,
    }
  )
)
