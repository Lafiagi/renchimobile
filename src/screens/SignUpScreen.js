import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomLabel from "../components/CustomLabel";
import axios from "../api/auth";
import { saveToken, getToken } from "../utils/tokens";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { StackActions } from "@react-navigation/routers";
import AppLoader from "../utils/AppLoader";
const SignUpScreen = ({setKey, setToken}) => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoadin, setIsloading] = useState(false)
  const accountType = "INDIVIDUAL";
  const registerUser = () => {
    setIsloading(true)
    axios
      .post("/register/", {
        email: email,
        password: password,
        full_name: firstname + ' ' + surname,
        first_name: firstname,
        last_name: surname,
        role: accountType,
        phone_code: "+234",
        phone: phone,
      })
      .then((response) => {
        const account_number = response.data.account_number;
        const tokenData = response.data.token;
        setKey(account_number);
        setToken(tokenData);
        setToken(email);
        saveToken('email', email);
        saveToken(account_number, tokenData);
        setIsloading(false)
        navigation.dispatch(StackActions.replace("VerifyPhoneNumberScreen"));
      })
      .catch((error) => {
        setError(error.response.data);
        console.log("Error ", error)
        setIsloading(false)
      });
  };

  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}> Welcome to Renchi</Text>
      <Text style={{color: 'red', fontWeight: 'bold'}}>
        {error.toString()}
      </Text>
      <Text style={styles.subtitle}>
        Fill out the form Below to get Started
      </Text>
      <CustomLabel text="Firstname" />
      <CustomInput
        placeholder="Firstname"
        setValue={setFirstname}
        value={firstname}
      />
      <CustomLabel text="Surname" />
      <CustomInput
        placeholder="Lastname"
        setValue={setSurname}
        value={surname}
      />
      <CustomLabel text="Email Address" />
      <CustomInput
        placeholder="Email Address"
        setValue={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <CustomLabel text="Phone Number" />
      <CustomInput
        placeholder="Phone Number"
        setValue={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />
      <CustomLabel text="Password" />
      <CustomInput
        placeholder="Password"
        setValue={setPassword}
        value={password}
        secureTextEntry
      />
      {error ? <Text style={{color: 'red', textAlign: 'center'}}>{error.toString()}</Text> : null}
      <CustomButton onPress={registerUser} text="Create Account" />
      <Text style={styles.text}>
        Not First Time?
        <Text
          onPress={() => {
            navigation.navigate("Signin");
          }}
          style={styles.link}
        >
          {" "}
          Login Here
        </Text>
      </Text>
      {/* <CustomButton onPress={onForgotBtnPressed} text='Forgot Password?' type='TERTIARY'/>
                <CustomButton onPress={onForgotBtnPressed} text='Signin with FB' type='TERTIARY'/>
                <CustomButton onPress={onForgotBtnPressed} text='Signin with Google' type='TERTIARY'/>
                <CustomButton onPress={onForgotBtnPressed} text='Signin with Github' type='TERTIARY'/> */}
    </ScrollView>
    {isLoadin ? <AppLoader /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  logo: { width: "70%", maxHeight: 200, maxWidth: 300 },
  root: { alignItems: "center", padding: 20 },
  title: { color: "#0C2A66", fontSize: 24, marginTop: 100, fontWeight: "bold" },
  subtitle: {
    color: "#495F8C",
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
    marginVertical: 10,
  },
  link: { color: "#0C2A66", fontWeight: "bold" },
  text: { margin: 1, color: "#677AA0" },
  label: {
    color: "#000",
    fontSize: 15,
    marginTop: 20,
    marginVertical: -10,
    marginLeft: "-87%",
  },

  scrollView: {
    minHeight: "10%",
    width: "100%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "40%",
  },
});
export default SignUpScreen;
