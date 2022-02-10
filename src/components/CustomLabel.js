import  React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
const CustomLabel = ({text}) =>{

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
            
    );
};
const styles = StyleSheet.create({
        container: {width: '100%',
        marginTop: '5%'
    },
    text: {color: '#495F8C', fontWeight: 'normal', fontSize:19},
});
export default CustomLabel;