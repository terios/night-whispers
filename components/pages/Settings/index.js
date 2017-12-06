import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Template from '../../templates';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
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
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../assets/images/settings.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }

  render = () => {
    const gradient = ['#348F50', '#56B4D3']
    return (
      <Template gradient={gradient}>
        <Text>Settings</Text>
      </Template>
    )
  }
}

export default Landing;
