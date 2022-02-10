import React from "react";
import CardComponent from "./CardComponent";
import {Text, View, StyleSheet} from 'react-native'
import {Card} from 'react-native-elements';
import { Dimensions } from "react-native";
import { ReactNativeNumberFormat } from "./NumberFormatterComponent";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const AcceptedOfferComponent = ({balance=10000, currency, status,}) =>{
    return(
       <Card containerStyle={styles.container}>
            <ReactNativeNumberFormat style={styles.balance} prefix={''} value={balance} />
           <Text style={styles.currency}>{currency}</Text>
           <Text style={styles.status}>{status}</Text>
       </Card>
       
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderRadius:20,
        padding: 30, 
        backgroundColor: '#0C2A66',
        minHeight: deviceHeight * .28,
        alignItems: 'center'
    },
    balance: {
     fontSize: 40,
     color: '#fff',
     fontWeight: 'bold',
    },
    currency: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    status: {
        backgroundColor: '#fff',
        padding: 8,
        textAlign: 'center',
        borderRadius: 5,
        color: '#8F8F8F',
        fontSize: 16,
        marginTop: 10
    },
  });
export default AcceptedOfferComponent;