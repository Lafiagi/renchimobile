import React from "react";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";
import { View, Text, Image, StyleSheet,  ScrollView} from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DropdownCompmonent from '../components/DropdownCompmonent';
import DropDownPicker from 'react-native-dropdown-picker';
import CardComponent from "../components/CardComponent";
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import OffersComponent from '../components/OffersComponent';
import AcceptedOfferComponent from "../components/AceeptedOfferDashboardComponent";
import AcceptedOfferDetailsComponent from "../components/AcceptedOfferDetailsComponent copy";
import OfferDetailsComponent from "../components/OfferDetailsComponent";

const data = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    currencySymbol: '$',
    balance:10000,
    rating: 4.7,
    rate:'500/1',
    totalTransactions: 40,
    avgTime: '2.5 - 3 secs'

  },

  {
    name: 'Lafiagi',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    currencySymbol: 'NGN',
    balance:13000,
    rating: 4.9,
    rate:'509/1',
    totalTransactions: 31,
    avgTime: '0.5 - 3 secs'

  },
  {
    name: 'jamee',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    currencySymbol: '$',
    balance:12500,
    rating: 5.0,
    rate:'496/1',
    totalTransactions: 45,
    avgTime: '2.5 - 3 secs'

  },
  {
    name: 'zuby',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    currencySymbol: '$',
    balance:10800,
    rating: 4.1,
    rate:'501/1',
    totalTransactions: 42,
    avgTime: '2.5 - 3 secs'

  },
];
const TransactionDetailsScreen = ({numberOffersAvailable=3201, vendors}) =>{
  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'US Dollar', value: 'USD'},
    {label: 'Nigerian Naira', value: 'NGN'}
    ]);  
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [seed, setSeed] = useState(1);
    const [users, setUsers] = useState([]);
    let tnxId = '19282912CD';
    let date = new Date();
    let time = '05:30PM'
  
  return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            
          <View style={styles.title}>
            <Ionicons name="chevron-back" size={28} color="#0C2A66" style={{marginLeft: 15}} />
            <Text style={{
                          color: '#6E6E6E',
                          fontSize:17, 
                          marginTop:3,
                          textAlign: 'center',
                          position: 'relative',
                          right: deviceWidth *.15}}>Transaction</Text>
          </View>
          <AcceptedOfferComponent balance={data[1].balance} currency={data[1].currencySymbol} status='Completed' />
            <View style={{maxWidth: deviceWidth *.8, alignSelf: 'center', padding: 10}}>
                <Text style={styles.tnxId}>Transaction ID: {tnxId}</Text>
                <Text style={styles.date}>{date.toDateString()} | {time}</Text>
            </View>
          <AcceptedOfferDetailsComponent />
          
        </ScrollView>
    );
};

const deviceWidth = Dimensions. get('window').width;
const deviceHeight = Dimensions. get('window').height;

const styles = StyleSheet.create({
    title: {
            color: '#0C2A66',
            fontSize: 20,
            fontWeight: 'bold',
            flex: 1, 
            flexDirection: 'row',
            marginTop: deviceHeight *.025,
            justifyContent: 'space-between',
            width: deviceWidth *.8,
            
          },
    tnxId: {
      fontSize: 17,
      color: '#606162'
    },
    date: {
      fontSize: 15,
      color: '#606162',
      textAlign: 'center'
    },
    text: {margin: 1, color: '#3A5283'},
    top: {color: '#3A5283', flexDirection:'row', alignItems:'center', justifyContent:'space-between'},
    img: {borderRadius:50},
      scrollView: {
        minHeight: '10%',
        width: '100%',
        margin: 20,
        alignSelf: 'center',
        padding: 0,
      },
      dashboard: {
        backgroundColor: '#0C2A66',
        padding: 20,
        color:'#fff',
        marginTop: 20,
         borderRadius:5,
         textAlign: 'justify'
      },
      picker:{
        flexGrow:1,
        position: 'relative',
        bottom: deviceHeight *.015,
        // backgroundColor: 'blue',
        width: deviceWidth * .19
        

      },
      card:{
        padding:20,
        margin: 3.2,
        minWidth: '48%',
        backgroundColor: '#F4F2DB',

      },
      transactions:{
        marginTop: 20,
        flex:1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        
      },
      
      seeAll:{
        position: 'relative',
        left: '1000%',
        backgroundColor:'green'
      },
      cardContainer:{
        marginTop:20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      contentContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: '40%'
      }
})

export default TransactionDetailsScreen;