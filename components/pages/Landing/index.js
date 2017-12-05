import React, { Component } from 'react';
import { StyleSheet, Button, Image } from 'react-native';

import Template from '../../templates';
import SoundsList from '../../SoundsList';

const icon = require('../../../assets/images/home.png')

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={icon}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Template>
        <SoundsList />
        <Button onPress={() => navigate('Settings')} title="Chat with Lucy" />
      </Template>
    );
  }
}

export default Landing;
