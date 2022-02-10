import React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import Logo from "../../assets/favicon.png";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomLabel from "../components/CustomLabel";
import BottomStickyButton from "../components/BottomStickyButton";
import { Ionicons } from "@expo/vector-icons";
import axios from "../api/auth";
import { StackActions } from "@react-navigation/routers";
const SetNewPasswordScreen = ({ route, navigation }) => {
  const { height } = useWindowDimensions();
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  const { code, email } = route.params;
  const setNewPassword = () => {
    if (password !== rpassword) {
      setErrorMsg("Passwords entered didn't not match");
      return;
    }
    axios
      .post("/reset_password/", {
        email: email,
        reset_code: code,
        password: password,
      })
      .then((response) => {
        console.log(response, ' is the response');
        navigation.dispatch(StackActions.replace("ResetDoneScreen"));
      })
      .catch((error) => {
        setErrorMsg(error.response.data);
        console.log("There was an error" + error);
      });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <Pressable
        style={{ position: "relative", right: 140 }}
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
            height: 40,
            width: 40,
            lineHeight: 40,
            marginLeft: 0,
            textAlign: "center",
          }}
        />
      </Pressable>
      <Text style={styles.title}>Forgot Password</Text>
      <CustomLabel text="Enter New Password" />
      <CustomInput setValue={setPassword} value={password} secureTextEntry />
      <CustomLabel text="Retype New Password" />
      <CustomInput setValue={setrPassword} value={rpassword} secureTextEntry />
      <Text style={{color: 'red', fontWeight:'bold'}}>{errorMsg.toString()}</Text>
      <BottomStickyButton
        onPress={setNewPassword}
        text="NEXT"
        marginTop="60%"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  logo: { width: "70%", maxHeight: 200, maxWidth: 300 },
  root: { alignItems: "center", padding: 20 },
  title: {
    color: "#0C2A66",
    fontSize: 16,
    marginTop: "10%",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#495F8C",
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
    marginVertical: 10,
  },
  link: { color: "#0C2A66", fontWeight: "bold" },
  text: { margin: 1, color: "#fff" },
  firstTime: { marginTop: 100, color: "#677AA0" },
  btn: {
    width: "100%",
    padding: 15,
    marginTop: "130%",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#BFB52A",
    color: "white",
  },
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
export default SetNewPasswordScreen;
