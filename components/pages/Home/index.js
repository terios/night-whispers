import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Forecast from '../../Forcast'

import ForcastApi from '../../../api/weather'
class Home extends Component {

    constructor(props) {
        super(props);        
        this.state = { 
            zip: "", 
            forecast: null
            /*forecast: {
                main:'abc',
                description: 'some description here',
                temp: 10
            }*/
        };
    }
    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        ForcastApi.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({ forecast: forecast });
          });
    }
    render() {
        let content = null
        const { zip } = this.state;

        if (this.state.forecast !== null) {
            content = (
              <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}
              />
            );
          }
      
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                You input {zip}.
            </Text>
            <TextInput
                style={styles.input}
                onSubmitEditing={this._handleTextChange}
            />
            {content}
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#ffff',
      alignItems: 'center',
      width: 300,
      justifyContent: 'center',
      padding: 20,
      borderRadius: 4,
    },
    welcome: {
        fontSize: 20, 
        textAlign: "center", 
        margin: 10
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        textAlign: "center",
        height: 40,
        width: 150,
        
    }
});
  

export default Home