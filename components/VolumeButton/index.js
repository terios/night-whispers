import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native';

import Slider from 'react-native-slider';
import Colors from '../../constants/colors'

const styles = StyleSheet.create({
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
const VolumeButton = props => (
        <View style={styles.control}>
        <Slider
          value={props.volume}
          onValueChange={value => props.onVolumeChange({ value })}
          minimumTrackTintColor={Colors.primary}
          maximumTrackTintColor={Colors.accent1}
          thumbTintColor={Colors.secondary}
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
)

VolumeButton.propTypes = {
  selected: PropTypes.bool,
  onVolumeChange: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};
export default VolumeButton
