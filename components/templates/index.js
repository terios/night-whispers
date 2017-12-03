import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { Constants } from 'expo';


class Default extends Component {
    
    constructor(props) {
        super(props);        
        this.state = {};
    }
    render() {
        return (
        <View {...this.props}>
            <View style={styles.statusBar} />
            {this.props.children}
        </View>
      );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "transparent",
        height: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
    },
});
  

export default Default