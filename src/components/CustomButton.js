import  React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
const CustomButton = ({onPress, text, type='PRIMARY'}) =>{

    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles['text_'+ type]]}>{text}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
        container: {width: '100%',
        padding: 15, marginVertical: 20,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {backgroundColor: '#BFB52A',},
    container_GREY: {backgroundColor: '#737373'},
    container_GREEN: {backgroundColor: '#BFB52A',},
    text: {color: '#fff', fontWeight: 'bold'},
    text_GREY: {color: '#fff'},
    text_GREEN:{color: '#0C2A66', fontSize:16},
    text_PRIMARY: {color: '#000', fontSize:17}

});
export default CustomButton;