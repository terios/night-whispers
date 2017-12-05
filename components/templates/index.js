import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';


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
        height: Platform.OS === 'ios' ? 10 : 0,
    },
});
  

export default Default