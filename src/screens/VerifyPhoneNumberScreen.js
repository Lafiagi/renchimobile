import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import OTPComponent from "../components/OTPComponent";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { getToken } from "../utils/tokens";
import axios from "../api/auth";
import { BackHandler, Alert } from "react-native";
import { StackActions } from "@react-navigation/routers";
import AppLoader from "../utils/AppLoader";
import showToast from "../utils/util";
const deviceWidth = Dimensions.get("window").width;

const VerifyPhoneNumberScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoadin, setIsloading] = useState(false);
  getToken('email').then((email) => { setEmail(email)} )
  const verifyEmail = () => {
    setIsloading(true)
    axios
      .post("/verify_account", {
        email: email,
        verification_code: pin,
      })
      .then((response) => { 
        setIsloading(false)
        showToast('success', 'Success', 'Successfully Verified your email. proceed to login.')
        navigation.dispatch(StackActions.replace("Signin"));
      })
      .catch((error) => {
        setIsloading(false)
        showToast('error', 'Failure', 'Invalid old password given, please try again.')
      });
  };

  return (
    <>
    <View style={styles.container}>
      <Text
        style={{
          color: "#0C2A66",
          fontSize: 23,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Verify your email address
      </Text>
      <Text
        style={{
          color: "#0C2A66",
          fontSize: 18,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        We have sent a 4 digit code to verify your email 
        <Text style={{ fontWeight: "bold" }}> {email}</Text>. Enter in the
        field below.
      </Text>
      <OTPComponent setPin={setPin} />
      <View>
        <Text
          style={{
            textAlign: "center",
            position: "relative", 
            bottom: 100,
            color: "#0C2A66",
          }}
        >
          Didn't get the code?{" "}
          <Text style={{ fontWeight: "bold" }}  onPress={() => {
          alert("Verification code sent to you email again")
        }}>Resend</Text>
        </Text>
      </View>
      <Text style={{color: 'red'}}>
        {error.toString()}
      </Text>
      <Pressable
        style={styles.btn}
        onPress={verifyEmail}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 17,  }}>
          Continue
        </Text>
      </Pressable>
    </View>
    {isLoadin ? <AppLoader /> : null}
    </>
    
    
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#BFB52A",
    color: "#fff",
    width: deviceWidth * 0.9,
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 30,
  },
  container: {
    marginTop: 80,
    maxWidth: "90%",
    alignSelf: "center",
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default VerifyPhoneNumberScreen;
