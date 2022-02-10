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
import TextBox from 'react-native-password-eye'; 
import { useState } from "react";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const ChangePinScreen = ({name, accountNumber, navigation}) =>{
    const [currentPin, setcurrentPin] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setconfirmPin] = useState("");
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
                            fontSize:22}}>Change PIN</Text>
            </View>
            <View style={{padding:20, marginTop: 30}}>
                <CustomLabel text='Current PIN' />
                <TextBox
                         secureTextEntry
                         keyboardType="numeric"                         
                         onChangeText={(currentPin) => setcurrentPin(currentPin)}
                         containerStyles={{
                                        borderWidth: 1,
                                        borderRadius: 5, 
                                        borderColor: '#C8C8C8',
                                        padding: 10,
                                        width: deviceWidth * 0.9
                    }}
                />

                <CustomLabel text='New PIN' />
                <TextBox
                         secureTextEntry
                         keyboardType="numeric"
                         onChangeText={(pin) => setPin(pin)}
                         containerStyles={{
                                        borderWidth: 1,
                                        borderRadius: 5, 
                                        borderColor: '#C8C8C8',
                                        padding: 10,
                                        width: deviceWidth * 0.9
                    }}
                />

                <CustomLabel text='Confirm PIN' />
                <TextBox
                         secureTextEntry
                         keyboardType="numeric"
                         onChangeText={(confirmPin) => setPin(confirmPin)}
                         containerStyles={{
                                        borderWidth: 1,
                                        borderRadius: 5, 
                                        borderColor: '#C8C8C8',
                                        padding: 10,
                                        width: deviceWidth * 0.9
                    }}
                />

                <View style={{marginTop: deviceHeight *.15, width: deviceWidth *0.9, alignSelf: 'center'}}>
                    <CustomButton text='Save' onPress={(password)=>{
                        //send password
                        navigation.goBack();
                    }}
                    />
                </View>
                

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
export default ChangePinScreen;