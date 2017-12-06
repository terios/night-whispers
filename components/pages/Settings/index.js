import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Template from '../../templates';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  message: {
    fontSize: 40,
    color: 'white',
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
        <View style={styles.container}>
          <Text style={styles.message} >COMING SOON</Text>
        </View>
      </Template>
    )
  }
}

export default Landing;
