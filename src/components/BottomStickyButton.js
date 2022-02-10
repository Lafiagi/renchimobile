import  React from 'react';
import { Text, StyleSheet, Pressable } from "react-native";
import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;

const BottomStickyButton = ({onPress, text, marginTop='130%'}) =>{
    const styles = StyleSheet.create({
        btn: {width: '100%',
        padding: 15, 
        marginTop: marginTop,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#BFB52A',
        
    },
    text: {
        color: '#fff',
    }
    });

    return(
        
        <Pressable onPress={onPress} style={styles.btn}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default BottomStickyButton;