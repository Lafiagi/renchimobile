import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomLabel from "../components/CustomLabel";
import BottomStickyButton from "../components/BottomStickyButton";
import { Ionicons } from "@expo/vector-icons";
const ConfirmEmailScreen = () =>{
    const onLoginBtnPressed = () =>{
    };
    
    const {height} = useWindowDimensions();
    const {code, setCode} = useState("");
    const {password, setPassword} = useState("");
    const {username, setUsername} = useState("");
    const {email, setEmail} = useState("");
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="#0C2A66" style={{position: 'relative', right: 80}} />
                <Text style={styles.title}> Forgot Password</Text>    
            </View>
            
                <CustomLabel text='Enter reset code here'/>
                <CustomInput placeholder='Email Address'
                            setValue={setEmail}
                            value={email}
                            keyboardType='email-address'
                />
                
                <BottomStickyButton onPress={onLoginBtnPressed} text='NEXT' />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    logo: {width: '70%', maxHeight: 200, maxWidth: 300},
    root: {alignItems: "center", padding: 20, },
    title: {color: '#0C2A66', fontSize: 16, fontWeight: 'bold',},
    subtitle: {color: '#495F8C', fontSize: 15, margin: 10, fontWeight: 'bold', marginVertical: 10},
    link: {color: '#0C2A66', fontWeight:'bold'},
    text: {margin: 1, color: '#fff'},
    firstTime: {marginTop: 100, color: '#677AA0'},
    btn: {width: '100%',
    padding: 15, 
    marginTop: '130%',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#BFB52A',
    color: 'white',
},
header:{
    flex:1,
    flexDirection:'row',
    marginTop:'5%',
    justifyContent: 'center'
},
    label: {
        color: "#000",
        fontSize: 15,
        marginTop: 20,
        marginVertical: -10,
        marginLeft: "-87%"
      },

      scrollView: {
        minHeight: '10%',
        width: '100%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF'
      },
      contentContainer: {
        
        paddingBottom: '40%'
      }
});
export default ConfirmEmailScreen;