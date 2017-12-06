import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import WeatherIcons from '../../constants/weatherIcons'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    padding: 5,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F0F2F0',
    padding: 10,
    borderRadius: 4,
  },
  image: {
    paddingBottom: 10,
  },
  icon: {
    color: '#1E88E5',
    opacity: 0.8,
  },
  textSelected: {
    color: '#F4511E',
  },
});
class SoundCard extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.item.fileName);
  };

  render() {
    const { selected } = this.props;
    const { title, category, icon } = this.props.item;

    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress}>
        <View style={styles.card}>
          <View style={styles.image}>
            <Image source={icon}/>
          </View>
          <Text style={[styles.text, selected ? styles.textSelected : null]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SoundCard;
