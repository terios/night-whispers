import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Slider from 'react-native-slider';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    padding: 15,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F0F2F0',
    padding: 10,
    borderRadius: 6,
    opacity: 0.7,
  },
  image: {
    paddingBottom: 5,
  },
  icon: {
    color: '#1E88E5',
    opacity: 0.8,
  },
  textSelected: {
    color: '#F4511E',
  },
  control: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  volumeSlider: {
    width: '100%',
    opacity: 0.8,
  },
  trackStyle: {
    width: '100%',
    opacity: 0.6,
  },
});
class SoundCard extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.item.fileName);
  };
  _onValumeChange = (volume) => {
    console.log('update volume ', volume);
  };
  render() {
    const { selected } = this.props;
    const { title, category, icon } = this.props.item;
    const volume = 4
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={this._onPress}>
          <View style={styles.image}>
            <Image source={icon} />
          </View>
          <Text style={[styles.text, selected ? styles.textSelected : null]}>
            {title}
          </Text>
        </TouchableOpacity>
        <View style={styles.control}>
          <Slider
            value={volume}
            onValueChange={value => this._onValumeChange({ value })}
            minimumTrackTintColor='#1E88E5'
            maximumTrackTintColor='#E0E0E0'
            thumbTintColor='#EF5350'
            minimumValue={0}
            maximumValue={10}
            step={1}
            animateTransitions={true}
            animationType='spring'
            thumbTouchSize={{ width: 40, height: 40 }}
            style={styles.volumeSlider}
            trackStyle={styles.trackStyle}
          />
        </View>
      </View>
    );
  }
}

export default SoundCard;
