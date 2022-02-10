import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const UserprofileItemComponent = ({icon, text, onClickHandler})=>{
return(
    <>
        <View onTouchStart={onClickHandler} style={{flexDirection: 'row', flex: 1, marginTop:20, padding: 10}}>
            {icon}
            <Text style={{color: '#1B3770', fontSize: 17, marginLeft:15}}>
                {text}
            </Text>
        </View>
    </>
);
}
export default UserprofileItemComponent;