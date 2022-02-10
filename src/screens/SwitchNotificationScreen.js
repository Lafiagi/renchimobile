import React from "react";
import { Card } from "react-native-elements";
import {View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import UserprofileItemComponent from "../components/UserprofileItemComponent";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import { Dimensions } from "react-native";
import DateComponent from "../components/DateComponent";
import SwitchNotificationComponent from "../components/SwitchNotificationComponent";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const SwitchNotificationScreen = ({navigation}) =>{
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <View style={styles.title}>
            <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color="#0C2A66"
            style={{
              backgroundColor: "#EBEBEB",
              borderRadius: 40,
              height: 35,
              width: 35,
              textAlign: "center",
              lineHeight: 35,
              marginLeft: 10,
            }}
          />
        </Pressable>
                <Text style={{
                            color: '#0C2A66',
                            fontSize:24,
                            fontWeight: 'bold',
                            marginLeft: 15
                            }}>Notification</Text>
            </View>
            <View style={{marginTop: 20, padding:10}}>
                    <SwitchNotificationComponent title='Push Notitications' body='Get new notifications for your transactions' />
                    <SwitchNotificationComponent title='Email Notitications' body='Receive email notifications for your transactions' />
                    <SwitchNotificationComponent title='SMS Notitications' body='Receive SMS notifications for your transactions' />
            </View>
            <View style={{maxWidth: deviceWidth * 0.9, marginLeft: deviceWidth * .05, marginTop: deviceHeight * .15}}>
                <CustomButton text='Save' onPress={() =>{
                        
                        navigation.goBack()}} />
            </View>
            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        color: '#0C2A66',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1, 
        flexDirection: 'row',
        marginTop: deviceHeight *.025,
        // justifyContent: 'space-between',
        width: deviceWidth *.8,
        
        
      },
    scrollView: {
        minHeight: '10%',
        width: '100%',
        margin: 20,
        alignSelf: 'center',
        padding: 5,
        backgroundColor: '#fff'
      },
      contentContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: '40%'
      }
})
export default SwitchNotificationScreen;