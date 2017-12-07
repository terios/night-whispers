import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import VolumeSlider from '../VolumeButton'
import Colors from '../../constants/colors'

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
    padding: 10,
    borderRadius: 6,
    opacity: 0.7,
  },
  image: {
    paddingBottom: 5,
  },
  icon: {
    color: Colors.primary,
    opacity: 0.8,
  },
  textSelected: {
    color: Colors.secondary,
  },
});
class SoundCard extends PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.id, this.props.item.fileName);
  };
  onVolumeChange = (volume) => {
    console.log('update volume ', volume);
  };
  render() {
    const { selected } = this.props;
    const { title, icon } = this.props.item;
    const volume = 4
    const statusColor = selected ? Colors.accent1 : 'transparent'
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: statusColor }] }
          onPress={this.onPress}
          >
          <View style={styles.image}>
            <Image source={icon} />
          </View>
          <Text style={[styles.text, selected ? styles.textSelected : null]}>
            {title}
          </Text>
        </TouchableOpacity>
        <VolumeSlider volume={volume} onVolumeChange={this.onVolumeChange} />
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
export default SoundCard;
