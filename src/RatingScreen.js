import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardItem } from './cmponents';

const RatingScreen = ({ item }) => {
    return (
        // <View>
        //     <Text>{item.name}</Text>
        // </View>
        <View>
            <Text style={styles.nameStyle}>{item.Source}</Text>
        </View>
    )
}

export default RatingScreen

const styles = StyleSheet.create({
    nameStyle: {
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        fontSize: 18,
        color: '#333'
    }
})
