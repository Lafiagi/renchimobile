import React from "react";
import CardComponent from "./CardComponent";
import {Text, Pressable, View, StyleSheet, Image} from 'react-native'
import {Card} from 'react-native-elements';
import { Dimensions } from "react-native";
import OfferDetailsComponent from "./OfferDetailsComponent";
import CustomButton from "./CustomButton";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const AcceptedOfferDetailsComponent = ({balance=10000, currency='NGN', sellerImg, sellerName='@bryanprince', totalTransactions=90, avgTime='10-30 secs'}) =>{
    return(
        <>
        <Card containerStyle={styles.container}>
            <OfferDetailsComponent 
                            text='Total:' 
                            balance={balance} 
                            currency={currency} 
                            style={styles.details}/>
            
            <OfferDetailsComponent 
                        text='You Pay:' 
                        balance={balance}
                        currency={currency}
                        style={styles.details}/>

            <OfferDetailsComponent 
                    text='Transaction fee: (1.2%)' 
                    balance={balance * 0.012}
                    currency={currency}
                    style={styles.details}/>
            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 15, color: '#656565'}}>
                    Seller:
                </Text>
            </View>
            <View key={sellerName} style={styles.user}>
                <Image
                style={styles.image}
                resizeMode="cover"
                source={{uri: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg'}}
                />
                <View style={{marginLeft:15}}>
                    <Text style={styles.fonts}>
                        {sellerName}
                    </Text>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <Text style={styles.fonts}>
                            {totalTransactions} Trans
                        </Text>    
                        <Entypo name="dot-single" size={24}  style={{color: '#a9a9a9'}} />
                        <Text  style={styles.fonts}>
                            {avgTime}
                        </Text>
                    </View>
                    
                </View>
                
            </View>
        </Card>
       
       
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderRadius:5,
        padding: 20, 
        height: deviceHeight * .47,
        alignItems: 'center'
    },
    btnContainer: {width: '100%',
    padding: 15, marginVertical: 20,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#BFB52A',
    maxWidth: deviceWidth * .9,
    alignSelf: 'center'
},
fonts:{
    color: '#7E7E7E', 
    fontSize: 15
},
    details: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceWidth *0.8,
        maxHeight: deviceWidth *.1,
    },
    user: {
        flex:1,
        flexDirection: 'row',
    },
    image: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        borderRadius: 50
    },
    balance: {
     fontSize: 40,
     color: '#000',
     fontWeight: 'bold',
    },
    currency: {
        textAlign: 'center',
        color: '#000',
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
export default AcceptedOfferDetailsComponent;