import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator, StackNavigator } from "react-navigation"
import { Constants } from 'expo';

import Landing from './pages/Landing'
import Settings from './pages/Settings'

const Navigator = TabNavigator({
  Landing: { 
      screen: Landing,
      path:'',
      navigationOptions: {
        tabBarLabel: 'Landing',
      }
  },
    Settings: { 
      screen: Settings,
      path:'settings',
      navigationOptions: {
        tabBarLabel: 'settings',
      }
    },
}, {
  animationEnabled: true,
  activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  swipeEnabled: true,  
  tabBarOptions: {
    showLabel: true,
    showIcon: Platform.OS === 'ios',
    style:{
      paddingTop: Constants.statusBarHeight
    }
  },
});

class NavigatorComp extends Component {
  render(){
    return Navigator
  }
}
export default Navigator