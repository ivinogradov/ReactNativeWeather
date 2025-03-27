import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RowText = ({ messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles }: any) => {
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    );
};

export default RowText;