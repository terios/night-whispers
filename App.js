/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Sound from 'react-native-sound'

import RootApp from './components/App'

/*
export default class App extends Component<{}> {
  render() {

      var whoosh = new Sound('rain.mp3', Sound.MAIN_BUNDLE, (error, sound) => {
          console.log('sound' , sound)
          if (error) {
              console.log('failed to load the sound', error);
              return;
          }
          // loaded successfully
          console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
          /*whoosh.play(() => {
              // Release when it's done so we're not using up resources
              whoosh.release();
          });
      });

      return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React ANAS!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
*/

export default RootApp