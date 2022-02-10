import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;

const MyRequestsButton = ({text, style, nextScreen, navigation, req}) => {
    return(
        <Pressable style={[styles[style], styles.btn]} onPress={()=>{ navigation.navigate(nextScreen, {req: req})}}>
            <Text style={{color: styles[style].color, textAlign:'center', }}>{text}</Text>
        </Pressable>
    );
    
}
const styles = StyleSheet.create({
    btn:{
        padding: 10,
        // borderWidth: 1,
        borderRadius:4, marginTop: deviceHeight * .01,
        // borderColor: '#bababa'
    },
    btnCompleted: {
        backgroundColor: '#B0E0FB',
        color: '#124886'
    },
    btnAccepted: {
        backgroundColor: '#C3EFDA',
        color: '#52A775'
    },
    btnViewBids: {
        backgroundColor: '#EBEBEB',
        color: '#124886'
    },
    btnPending: {
        backgroundColor: '#CCD2DF',
        color: '#3C5484'
    },

});
export default MyRequestsButton;