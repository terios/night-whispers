import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Landing extends Component {

    constructor(props) {
        super(props);        
        this.state = {};
    }
    render() {
      return (
        <View style={styles.container}>
            <Text>
                okokok
            </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
    }
});
  

export default Landing