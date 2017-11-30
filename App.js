import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/pages/Home' 
import Landing from './components/pages/Landing' 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D32F2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
