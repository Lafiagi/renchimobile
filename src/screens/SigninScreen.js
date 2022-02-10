import React from "react";
import { Text, StyleSheet, ScrollView, BackHandler } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState, useEffect, useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomLabel from "../components/CustomLabel";
import { Alert } from "react-native";
import { StackActions } from "@react-navigation/native";
import axios from "../api/auth";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import AppLoader from "../utils/AppLoader";
import { loginContext } from "../context/LoginContext";
import { login } from "../auth/login";
const SigninScreen = ({ setToken, setKey }) => {
  // const message = useContext(loginContext);
  const isFocused = useIsFocused();
  useEffect(() => {
    const backAction = () => {
      if (isFocused) {
        Alert.alert("Hold on!", "Are you sure you want to exit renchi?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
      } else {
        navigation.goBack();
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useContext(loginContext);
  const [isLoadin, setIsloading] = useState(false);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}> Welcome Back</Text>
        <CustomLabel text="Email Address" />
        <CustomInput
          placeholder="Email Address"
          setValue={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <CustomLabel text="Password" />
        <CustomInput
          placeholder="Password"
          setValue={setPassword}
          value={password}
          secureTextEntry
        />
        <Text style={{ color: "red", fontWeight: "bold" }}>
          {errorMsg.toString()}
        </Text>
        <CustomButton
          onPress={() =>
            {login(setErrorMsg, setIsloading, setUserData, email, password, navigation);
            }
          }
          text="LOG IN"
        />
        <Text
          style={styles.link}
          onPress={() => {
            navigation.navigate("ForgotPasswordScreen");
          }}
        >
          {" "}
          Forgot Password?
        </Text>

        <Text style={styles.firstTime}>
          First Time?
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            {" "}
            Signup Here
          </Text>
        </Text>
      </ScrollView>
      {isLoadin ? <AppLoader /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  logo: { width: "70%", maxHeight: 200, maxWidth: 300 },
  root: { alignItems: "center", padding: 20 },
  title: {
    color: "#0C2A66",
    fontSize: 24,
    marginTop: "20%",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#495F8C",
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
    marginVertical: 10,
  },
  link: { color: "#0C2A66", fontWeight: "bold", padding: 15 },
  text: { margin: 1, color: "#677AA0" },
  firstTime: { marginTop: 50, color: "#677AA0" },
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
export default SigninScreen;
