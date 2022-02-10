import React from 'react';
import { View, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';
import { Text, Card} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomStickyButton from './BottomStickyButton';
import CustomInput from './CustomInput';
import CustomLabel from './CustomLabel';
import { useState, useContext } from 'react';
import client from   '../api/requests'
import AppLoader from '../utils/AppLoader';
import { StackActions } from "@react-navigation/routers";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const MakeOfferComponent = ({exchangeRequest, navigation, token}) => {
    
    const request = exchangeRequest;
    const [rate, setRate] = useState("");
    const [totalOffer, setTotalOffer] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const amount = request.current_currency_amount
    const handleRateChange= (rate)=>{
      setRate(rate);
      setTotalOffer((amount / rate).toFixed(2));
    }

    const handleAmountChange= (totalOfferVal)=>{
      setTotalOffer(totalOfferVal);
      setRate((amount/ totalOfferVal).toFixed(2))
    }

const sendOffer = ()=>{
  setIsloading(true)
  client
    .post(`/core/bid/${request.id}/`, {
        rate: rate,
        amount: totalOffer,
    },
    {
      headers: {
        Accept: "application/json", 
        Authorization: `Token ${token}`,
      }}
    
    )
    .then((response) => {
      
      setIsloading(false)
      navigation.dispatch(
        StackActions.replace('OfferSentScreen'));
    })
    .catch((error) => {
      setIsloading(false)
      setErrorMsg(error.message)
      
    });
  }
    return (
        <>
      <View>
          <Card containerStyle={styles.card}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.values}>
                      <Text style={styles.labels}>User: </Text> @{request.buyer.first_name}
                    </Text>

                    <Text style={styles.values}>
                      <Text style={styles.labels}>Destination Type: </Text> {request.source_of_fund}
                    </Text>

                    <Text style={styles.values}>
                      <Text style={styles.labels}>Bank name: </Text>{request.bank}
                    </Text>
                </View>

                <View>
                  <Text style={styles.values}>{request.current_buyer_currency}
                      <Entypo name="triangle-right" size={20} color="#fff" />
                      {request.desired_currency}
                  </Text>
                  <Text style={styles.values}> 
                      {request.current_buyer_currency_symbol}{request.current_currency_amount}
                  </Text>

                </View>
            </View>
            
          </Card>
          <View style={{position: 'relative', top: 50}}>
            <CustomLabel text='Enter rate' />
            <TextInput 
                style={styles.input}
                onChangeText={(rate) =>{
                  handleRateChange(rate)
                }}
                keyboardType='phone-pad'
                placeholder='0.0'
                value={rate.toString()}
            />
            
            <View style={styles.info}>
                <Ionicons name="information-circle" size={24} color="#0C2A66" />
                <Text style={styles.infoText}>               
                    Rate should be equivalent to a
                    unit of the currency i.e Entering USD 20 means 20NGN= 1 USD
                </Text>
            </View>
            

            <CustomLabel text='Total offer' />
            <TextInput 
                style={styles.input}
                keyboardType='phone-pad'
                placeholder='0.0'
                value={totalOffer.toString()}
                onChangeText={(value) => {
                  handleAmountChange(value)
                }}
                
                
            />
            {errorMsg? <Text style={{color: 'red'}}>{errorMsg}</Text>: null}
            <BottomStickyButton onPress={sendOffer} text='Send offer' marginTop='20%' />
          </View>

        </View>  
      {isLoading? <AppLoader />: null}
      </>

  );
};

const styles = StyleSheet.create({
  input: {
        backgroundColor: "white", 
        width: deviceWidth * 0.891, 
        borderColor: '#E4E4E4',
        borderRadius: 6, 
        borderWidth:1.5,
        marginVertical: 5,
        minHeight: "8%",
        height: deviceHeight * .09,
        maxHeight: '70%', 
        paddingLeft:15, 
        fontSize:20
},
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    flexDirection: 'row',

  },

  infoText: {
    color: '#929292', 
    flex: 1, 
    flexWrap: 'wrap',
  },
  values: {
    color:'#fff',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14
  },
  labels: {
    color:'#fff',
  },
  card: {
        width: deviceWidth * .89,
        margin: 'auto',
        marginTop: 20,
        borderColor: '#D1D1D1',
        borderRadius: 7,
        backgroundColor: '#0C2A66',
        padding: 25
},
  fonts: {
    marginBottom: 8,
    color: '#fff'
  },
  back: {
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    borderRadius:4, marginTop: deviceHeight * .01,
    borderColor: '#bababa'
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    color: '#0C2A66', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MakeOfferComponent;