import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import WeatherIcons from '../../data/weatherIcons'

class SoundCard extends PureComponent {
    constructor(props) {
        super(props);
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const { selected } = this.props
        const { title, category } = this.props.item
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPress}>
                <View style={styles.card}>
                    <View style={styles.image}>
                        <Image source={WeatherIcons[category]} />
                    </View>
                    <Text style={[
                        styles.text, 
                        selected ? styles.textSelected : null,
                        ]}>
                        {title}</Text>
                    </View>      
                </TouchableOpacity>      
        )
    }
}

const styles = StyleSheet.create({
    container:{
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
        borderRadius: 4
    },
    image: {
        paddingBottom: 10
    },
    text: {
        color: "black"
    },
    textSelected: {
        color: '#F4511E'
    }
});

export default SoundCard