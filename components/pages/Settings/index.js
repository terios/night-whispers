import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Template from '../../templates'

class Landing extends Component {

    constructor(props) {
        super(props);        
        this.state = {};
    }
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./settings.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    render() {
      return (
        <Template>
            <Text>
                Settings
            </Text>
        </Template>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    icon: {
        width: 26,
        height: 26,
    }
});
  

export default Landing