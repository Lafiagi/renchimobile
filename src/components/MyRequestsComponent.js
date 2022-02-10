import React from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Text, Card} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import MyRequestsButton from './MyRequestsButton';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const MyRequestsComponent = ({navigation, request}) => {

  const  prevItem = () => {
    
   if(request.request_status === 'Pending')
      return <MyRequestsButton nextScreen='ViewBidsScreen' req={request} navigation={navigation} text='View Bids' style='btnViewBids' color='#3C5484'/>
  else
    return <MyRequestsButton nextScreen='TransactionDetailsScreen' req={request} navigation={navigation} text='View details' style='btnViewBids' color='#3C5484'/>
}


    return (    
          <Card containerStyle={{width: deviceWidth * .89, margin: 'auto', marginTop: 20, borderColor: '#D1D1D1', borderRadius: 7}}>
            <View style={styles.container}>
                <View>
                    <Text style={{color:'#B3B3B3', marginTop: 5}}>@{request.buyer.first_name }</Text>
                    <Text style={{marginTop:10, fontWeight: 'bold', fontSize:17}}>{request.current_buyer_currency}
                    <Entypo name="triangle-right" size={18} color="black" />
                    {request.desired_currency}</Text>
                    <Text style={{color:'#0C2A66', fontSize: 20, fontWeight: 'bold', marginTop:5}}>{request.current_buyer_currency_symbol}{request.current_currency_amount}</Text>
                    
                </View>

                <View>

                <MyRequestsButton text={request.request_status} style={'btn'+request.request_status} color='#3C5484'/>
                
                { prevItem()}
                </View>
            </View>
            
          </Card>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between'
    
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

export default MyRequestsComponent;