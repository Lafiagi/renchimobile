import React from 'react';
import {View, ScrollView, Text, StyleSheet, Platform } from 'react-native';
import CardComponent from './CardComponent';
const HorizontalScrollView = ({currencyName, currencySymbol, balance}) =>  { 
    return( 
    <View style = { styles.container }>
        <View style = { styles.scrollViewHolder }> 
        <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { true }> 
            <CardComponent currencyName='US Dollar (USD)' currencySymbol='$' balance={1550.07} bgColor='#B6AD36' />
            <CardComponent currencyName='Naira (NGN)' currencySymbol='#' balance={2380.0}  bgColor='#56B9A5'/>
            <CardComponent currencyName='Euro (BGP)' currencySymbol='£' balance={690000} bgColor='#B83B5B' />
        </ScrollView> 
        </View>
    </View> );
}
const styles = StyleSheet.create( { 
    container: { paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    flex: 1,
    justifyContent: 'center' },
    scrollViewHolder: { },
});
export default HorizontalScrollView;