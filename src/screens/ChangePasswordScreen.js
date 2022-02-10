import React, { useContext } from "react";
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
import showToast from "../utils/util";
import axios from "../api/auth";
import { loginContext } from "../context/LoginContext";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const ChangePasswordScreen = ({name, accountNumber, navigation}) =>{
    const [currentPassword, setcurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [userData, _] = useContext(loginContext)
    const {token} = userData
    const sendChgPassRequest = () => {
      axios
        .post("/reset_password_loggedin/", {
          old_password: currentPassword,
          new_password: password,
        },
        {headers: {'Authorization': `Token ${token}`}}
        )
        .then((response) => {
          showToast('success', 'Success', 'Successfully updated your password')
          navigation.goBack()
        })
        .catch((error) => {
          setErrorMsg(JSON.stringify(error.message));
          console.log("There was an error " +  JSON.stringify(error.message));
          showToast('error', 'Failure', 'Invalid old password given, please try again')

        });
    };
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
                            fontSize:22}}>Change Password</Text>
            </View>
            <View style={{padding:20, marginTop: 30}}>
                <CustomLabel text='Current Password' />
                <TextBox
                         secureTextEntry
                         onChangeText={(currentPassword) => setcurrentPassword(currentPassword)}
                         containerStyles={{
                                        borderWidth: 1,
                                        borderRadius: 5, 
                                        borderColor: '#C8C8C8',
                                        padding: 10,
                                        width: deviceWidth * 0.9
                    }}
                />

                <CustomLabel text='New Password' />
                <TextBox
                         secureTextEntry
                         onChangeText={(password) => setPassword(password)}
                         containerStyles={{
                                        borderWidth: 1,
                                        borderRadius: 5, 
                                        borderColor: '#C8C8C8',
                                        padding: 10,
                                        width: deviceWidth * 0.9
                    }}
                />

                <CustomLabel text='Confirm Password' />
                <TextBox
                         secureTextEntry
                         onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)}
                         containerStyles={{
                                        borderWidth: 1,
                                        borderRadius: 5, 
                                        borderColor: '#C8C8C8',
                                        padding: 10,
                                        width: deviceWidth * 0.9
                    }}
                />

                <View style={{marginTop: deviceHeight *.15, width: deviceWidth *0.9, alignSelf: 'center'}}>
                    <CustomButton text='Save' onPress={sendChgPassRequest} />
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
export default ChangePasswordScreen;