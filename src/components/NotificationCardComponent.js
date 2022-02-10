import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions. get('window').width;
const NotificationCardComponent = ({name,  status, time, navigation})=>{
    return( 
    
            <Card containerStyle={{width: deviceWidth, alignSelf: 'center'}}>
                <Text style={{color: '#0C2A66', fontWeight: 'bold', fontSize: 17,}}>
                    {status}
                </Text>
                <Text style={{marginTop:3}}>
                <Text style={{fontWeight: 'bold',}}>@{name}</Text> sent you an offer
                </Text>
                <View style={{flexDirection:'row', flex: 1, marginTop:10}}>
                    <Pressable onPress={() => {
                        navigation.navigate('AcceptedScreen')
                    }} style={{backgroundColor: '#0C2A66', width: deviceWidth * 0.2, padding:8, borderRadius:20, }}>
                        <Text style={{color: '#fff', textAlign: 'center'}}>View</Text>
                    </Pressable>
                    <Text style={{color: '#000', marginTop: 8, marginLeft: 10}}>
                        4h ago{time}
                    </Text>
                </View>    
            </Card>
    );
};
const styles = StyleSheet.create({
    historyName:{
        color:'#B9B9B9', 
        fontWeight:'normal'

      },
      historyAmount:{
        fontWeight: 'bold',
    },

    txnDetails:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
      borderWidth:0,
      maxWidth: deviceWidth,
      borderBottomWidth:1.5,
      borderBottomColor:'#EBEBEB', 
      marginTop: 40
      
    },
});
export default NotificationCardComponent;