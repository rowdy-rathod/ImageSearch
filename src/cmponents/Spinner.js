import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

//ActivityIndicator is knows as Spinner 
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                color="blue"
                size={size || 'large'} />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Spinner };