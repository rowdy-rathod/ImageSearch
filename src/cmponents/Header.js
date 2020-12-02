import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        borderBottomColor: '#e2e2e2',
        borderColor: '#e2e2e2',
        borderBottomWidth: 2,
        marginTop: 12
    },
    headerTitle: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal'
    }
});

export { Header };