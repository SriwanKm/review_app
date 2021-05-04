import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from "../styles/global";


export default function Main({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text
                onPress={() => navigation.navigate('Description')}
                style={globalStyles.titleText}>
                Home
            </Text>
        </View>

    )
}

