import React from "react";
import {
  View,
  Text,
  Image,
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
import { StackActions } from "@react-navigation/routers";
import { getToken } from "../utils/tokens";
import axios from "../api/auth";
const ResetScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [errorMsg, setErrorMsg] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  getToken("email").then((email) => {
    setEmail(email);
  });
  
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
      <Text style={styles.title}> Forgot Password</Text>
      <CustomLabel text="Enter reset code here" />
      <CustomInput
        placeholder="Reset code"
        setValue={setCode}
        value={code}
        keyboardType="email-address"
      />
      {/* <Text style={{ color: "red" }}>{errorMsg.toString()}</Text> */}

      <BottomStickyButton onPress={()=>{
        navigation.dispatch(StackActions.replace("SetNewPasswordScreen", {code: code, email: email}));
      }} text="NEXT" marginTop="95%" />
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
export default ResetScreen;
