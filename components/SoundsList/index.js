import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Sound from 'react-native-sound';
import SoundCard from '../SoundCard';

class SoundsList extends PureComponent {

  state = { selected: (new Map(): Map<string, boolean>) };

  playSound = () => {
    console.log(state.selected);
  };
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      const soundState = selected.get(id);
      if (soundState) {
        const whoosh = selected.get(id);
        whoosh.stop(() => {
          // Note: If you want to play a sound after stopping and rewinding it,
          // it is important to call play() in a callback.
          console.log('stopped the sound');
        });
        selected.delete(id); // toggle
      } else {
        const whoosh = new Sound('rain.mp3', Sound.MAIN_BUNDLE, (error) => {
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
          data={[
            { id: 0, title: 'Heavy rain', category: 'rain' },
            { id: 1, title: 'Rain drops', category: 'storm_rain' },
          ]}
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
