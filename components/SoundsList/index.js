import React, { PureComponent } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';

import SoundCard from '../SoundCard'

class SoundsList extends PureComponent {
    constructor(props) {
        super(props);
    }

    state = {selected: (new Map(): Map<string, boolean>)}

    _keyExtractor = (item, index) => item.id;
    
    _onPressItem = (id: string) => {
        this.setState((state) => {
          const selected = new Map(state.selected);
          selected.set(id, !selected.get(id)); // toggle
          return {selected};
        });
      };
      
    _renderItem = ({item}) => (
        <SoundCard
          id={item.id}
          onPressItem={this._onPressItem}
          selected={!!this.state.selected.get(item.id)}
          item={item}
        />
    )
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { id: 0, title: 'Heavy rain', category: 'rain'}, 
                        { id: 1, title: 'Rain drops', category: 'storm'}]}
                    numColumns={2}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>      
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
    }
});

export default SoundsList