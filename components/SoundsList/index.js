import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, FlatList } from 'react-native';

import Sound from 'react-native-sound';
import SoundCard from '../SoundCard';

import Sounds from '../../data/sounds';


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

class SoundsList extends PureComponent {
  state = { selected: (new Map(): Map<string, boolean>) };

  keyExtractor = item => item.id;

  onPressItem = (id, fileName) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      const soundState = selected.get(id);

      if (soundState) {
        console.log('2');
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
          console.log(`duration in seconds: ${whoosh.getDuration()}number of channels: ${whoosh.getNumberOfChannels()}`);
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

  renderItem = ({ item }) => (
    <SoundCard
      id={item.id}
      onPressItem={this.onPressItem}
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
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

SoundCard.propTypes = {
  id: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  onPressItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }),
};
export default SoundsList;
