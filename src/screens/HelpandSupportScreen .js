import React from "react";
import { Card } from "react-native-elements";
import {View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
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
import DropdownComponent from "../components/DropdownCompmonent";
import { useState, useContext } from "react";
import axios from "../api/requests";
import { getToken } from "../utils/tokens";
import { loginContext } from "../context/LoginContext";
import { login } from "../auth/login";
import AppLoader from "../utils/AppLoader";
import showToast from "../utils/util";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const HelpandSupportScreen = ({navigation}) =>{
    const [category, setCategory] = useState("");
    const [comment, setComment] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [userData, setUserData] = useContext(loginContext)
    const [isLoading, setIsloading ] = useState(false)
    const {token} = userData
    const sendHelpRequest = () => {
      setIsloading(true)
      axios
        .post("/help/", {
          category: category,
          comment: comment,
        },
        {headers: {'Authorization': `Token ${token}`}}
        )
        .then((response) => {
          setIsloading(false)
          showToast("success", "Success", "Successfully Sent your message, thank you for getting in touch");
          navigation.goBack()
        })
        .catch((error) => {
          setIsloading(false)
          setErrorMsg(JSON.stringify(error.response.data));
          console.log("There was an error " +  JSON.stringify(errorMsg));
        });
    };
    return(
      <>
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
                            marginLeft: 10
                            }}>Help & Support</Text>
            </View>

            <View style={{maxWidth: deviceWidth * 0.88, marginLeft: 15, marginTop:30}}>
                <CustomLabel text='Category' />
                <DropdownComponent
                                  defaultItems = {[
                                    { label: "Login Problem", value: "Login Problem" },
                                    { label: "Report Fraud", value: "Report Fraud" },
                                    { label: "Make Suggestion", value: "Suggestion" },
                                    { label: "Make Enquiry", value: "Make Enquiry" },
                                  ]}
                                  setValue={setCategory}
                                  value={category} />
            </View>
            

            <View style={{maxWidth: deviceWidth * 0.88, marginLeft: 15, marginTop:20}}>
                <CustomLabel text='Comment' />
                <TextInput style={{borderWidth:1, borderRadius:5, borderColor: '#C8C8C8',}}
                           multiline = {true}
                           numberOfLines = {11}
                           textAlignVertical='top'
                           onChangeText={(value) =>{
                               setComment(value);
                           }}
                           value={comment}
                           />
            </View>
            <Text style={{color: 'red', maxWidth: 300, alignSelf:'center', textAlign: 'center', marginTop: 20}}>
              {errorMsg.toString()}
            </Text>
            <View style={{maxWidth: deviceWidth * 0.9, marginLeft: deviceWidth * .05, marginTop: deviceHeight * .05}}>
                <CustomButton text='Send' onPress={sendHelpRequest} />
            </View>
            <Card containerStyle={{borderRadius:4, padding:21}}>
                <Text style={{color: '#383838', fontSize:17}}>
                    Support lines:
                </Text>

                <Text style={{color: '#383838', fontSize:17}}>
                    +234 9058939834
                </Text>

                <Text style={{color: '#383838', fontSize:17}}>
                   +234 801 094 2492
                </Text>
            </Card>
        </ScrollView>
        {isLoading ? <AppLoader /> : null}
        </>
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
export default HelpandSupportScreen;