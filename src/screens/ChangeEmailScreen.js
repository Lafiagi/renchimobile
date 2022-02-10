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
import { useState } from "react";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const ChangeEmailScreen = ({name, accountNumber, navigation}) =>{
    const [email, setEmail] = useState("");
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
                            fontSize:22,
                            fontWeight: 'bold',
                            
                            }}>Change Email</Text>
            </View>
            <View style={{padding:20,}}>
                <CustomLabel text='New Email' />
                <CustomInput setValue={setEmail} value={email} />

                <View style={{width: deviceWidth *0.9, alignSelf: 'center'}}>
                    <CustomButton text='Send Instruction'  onPress={(email)=>{
                        //send email
                        alert("Instruction on how to reset your password has been sent to your account")
                        navigation.goBack();
                    }} />
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
export default ChangeEmailScreen;