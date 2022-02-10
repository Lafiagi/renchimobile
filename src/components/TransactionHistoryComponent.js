import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions. get('window').width;
const TransactionHistoryComponent = ({tnx})=>{
    return( 
        <View style={styles.txnDetails}>
            <View>
            <Text style={styles.historyName}>@{tnx.buyer.first_name}</Text>
            </View>
            <View>
            <Text style={styles.historyAmount}>{tnx.current_buyer_currency}<Entypo name="triangle-right" size={15} color="black" />{tnx.desired_currency} </Text>
            <Text style={[styles.historyAmount, {color: '#0C2A66', fontSize: 20}]}>{tnx.current_buyer_currency_symbol}{tnx.current_currency_amount}</Text>
            </View>
        
        </View>
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
export default TransactionHistoryComponent;