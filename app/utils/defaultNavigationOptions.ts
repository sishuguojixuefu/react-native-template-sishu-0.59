import { NavigationScreenConfig, NavigationScreenOptions } from 'react-navigation'
import theme from '~/theme'

const defaultNavigationOptions: NavigationScreenConfig<NavigationScreenOptions> = {
  headerStyle: {
    backgroundColor: theme.brand_primary,
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export default defaultNavigationOptions
