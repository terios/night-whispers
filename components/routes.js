import { Platform } from 'react-native';

import Landing from './pages/Landing'
import Settings from './pages/Settings'


const AppNavigatorConfig = {
  routes: {
    Landing: {
      screen: Landing,
      path: '',
      navigationOptions: {
        tabBarLabel: 'Landing',
      },
      key: '123456',
    },
    Settings: {
      screen: Settings,
      path: 'settings',
      navigationOptions: {
        tabBarLabel: 'settings',
      },
      key: '100000',
    },
  },
  options: {
    animationEnabled: true,
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: Platform.OS === 'ios',
      style: {},
    },
  },
}

export default AppNavigatorConfig
