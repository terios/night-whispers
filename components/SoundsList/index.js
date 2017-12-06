import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Sound from 'react-native-sound';
import SoundCard from '../SoundCard';

import Sounds from '../../data/sounds'

class SoundsList extends PureComponent {

  state = { selected: (new Map(): Map<string, boolean>) };

  playSound = () => {
    console.log(state.selected);
  };
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string, fileName: string) => {

    console.log("ooool")
    this.setState((state) => {
      const selected = new Map(state.selected);
      const soundState = selected.get(id);

      if (soundState) {
        console.log('2')
        const whoosh = selected.get(id);
        whoosh.stop(() => {
          console.log('stopped the sound');
        });
        selected.delete(id); // toggle
      } else {
       const whoosh = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          console.log('duration in seconds: ' +
              whoosh.getDuration() +
              'number of channels: ' +
              whoosh.getNumberOfChannels(),);
          whoosh.play(() => {
            // Release when it's done so we're not using up resources
            console.log('playing');
          });
        });
        selected.set(id, whoosh); // toggle
      }
      return { selected };
    });
  };

  _renderItem = ({ item }) => (
    <SoundCard
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      item={item}
    />
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Sounds}
          numColumns={2}
          extraData={this.state}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default SoundsList;
