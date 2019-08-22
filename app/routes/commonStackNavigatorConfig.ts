import { NavigationScreenConfig, NavigationStackViewConfig, NavigationScreenOptions } from 'react-navigation'
import { fromRight } from 'react-navigation-transitions'
import theme from '~/theme'

const commonStackNavigatorConfig: NavigationScreenConfig<NavigationScreenOptions> | NavigationStackViewConfig = {
  headerStyle: {
    backgroundColor: theme.brand_primary,
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  transitionConfig: () => fromRight(),
  headerBackTitleVisible: false,
}

export default commonStackNavigatorConfig
