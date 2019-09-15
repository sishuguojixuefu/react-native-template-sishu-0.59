import { NavigationScreenConfig, NavigationStackViewConfig, NavigationScreenOptions } from 'react-navigation'
import { fromRight } from 'react-navigation-transitions'

const commonStackNavigatorConfig: NavigationScreenConfig<NavigationScreenOptions> | NavigationStackViewConfig = {
  headerStyle: {
    backgroundColor: '#ffffff',
  },
  headerTintColor: '#000000',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#000000',
  },
  transitionConfig: () => fromRight(),
  headerBackTitleVisible: false,
}

export default commonStackNavigatorConfig
