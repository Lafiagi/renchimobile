import React from "react";
import {
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useState } from "react";
import BottomStickyButton from "../components/BottomStickyButton";
import Icon from "../components/IconComponent";

const ResetDoneScreen = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <Icon color="#0C2A66" name="md-checkmark-circle" size={100} />
      <Text style={styles.title}> Done </Text>
      <Text style={styles.text}>
        {" "}
        Please Login to your account with your password
      </Text>
      <BottomStickyButton
        onPress={() => {
          navigation.navigate("Signin");
        }}
        marginTop="110%"
        text="Login"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: { color: "#0C2A66", fontSize: 22, fontWeight: "bold" },
  text: {
    margin: 1,
    color: "#3A5283",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
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
export default ResetDoneScreen;
