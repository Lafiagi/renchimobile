import { style } from 'dom-helpers';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ReactNativeNumberFormat } from './NumberFormatterComponent'

const OfferDetailsComponent = ({text, balance, currency, style}) =>{
    return(<>
        <View style={[style,{marginTop:18}]}>
            <Text style={{fontSize: 20, color:'#5F5F5F'}}>{text}</Text>
            <ReactNativeNumberFormat prefix={currency} style={{fontSize: 20, color:'#5F5F5F'}} value={balance} />
        </View>
        <View style={{borderStyle: 'dashed', borderWidth: 1, borderRadius: 1}} />    
</>
    );
}

export default OfferDetailsComponent;