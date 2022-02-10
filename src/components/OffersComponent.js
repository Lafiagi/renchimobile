import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Button, Icon } from 'react-native';
import { Text, Card} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { ReactNativeNumberFormat } from './NumberFormatterComponent';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const OffersComponent = ({sellerName,sellerImg, currencySymbol, balance, rating, rate, totalTransactions, avgTime,}) => {
    
    return (

            <Card containerStyle={styles.card}>
                <View style={styles.container}>
                    <View key={sellerName} style={styles.usler}>
                        <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: sellerImg}}
                        />
                    </View>
                    <View>
                        <Text style={styles.name}>{sellerName}</Text>
                            <View style={styles.details}>
                                <Text style={styles.fonts}>
                                    {totalTransactions} Trans
                                </Text>    
                                <Entypo name="dot-single" size={24}  style={styles.dot} />
                                <Text  style={styles.fonts}>
                                    {avgTime}
                                </Text>
                            </View>

                            <View style={styles.rating}> 
                            <Entypo name="star" size={18} color="#BFB52A" />
                                <Text  style={styles.fonts}>
                                    <Text style={{color: '#BFB52A'}}>
                                        {rating}
                                    </Text> / 5.0
                                </Text>
                            </View>
                        <Text style={styles.balance}>
                            <ReactNativeNumberFormat style={styles.balance} prefix={currencySymbol} value={balance} />
                        </Text>
                        <Text style={styles.rate}>
                            Rate: {rate}
                        </Text>
                    </View>
                </View>
            </Card>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row'
      },
      dot: {
        color: '#858585',
      },
    details: {
            flex: 1,
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            width: deviceWidth *.5,
            marginTop: 5
            },
        rating: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            marginRight: '10%'
        },
        rate: {
            color: '#8D8D8D',
            padding: 0,
            marginTop: 10
        },
    card: {
            borderRadius: 5 , 
            
        },

        balance: {
            backgroundColor: '#E4E2DB', 
            padding: 10, 
            fontWeight: 'bold', 
            color: '#0C2A66',
            fontSize: 18,
            marginTop: 10
        },
      fonts: {
        color: '#858585',
        fontSize: 16
      },
      user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
      image: {
        width: deviceWidth *.19,
        height: deviceHeight * .1,
        marginRight: 10,
        backgroundColor:'green',
        borderRadius:50
      },
      name: {
        fontSize: 20,
        color: '#1B3770',
        textTransform: 'capitalize'
      },
    });

export default OffersComponent;