import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'transparent',
    height: Platform.OS === 'ios' ? 20 : 0,
  },
  gradient: {
    height: '100%',
  },
});

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { gradient } = this.props;
    return (
      <View {...this.props}>
        <LinearGradient colors={gradient} style={styles.gradient}>
          <View style={styles.statusBar} />
          {this.props.children}
        </LinearGradient>
      </View>
    );
  }
}

export default Default;
