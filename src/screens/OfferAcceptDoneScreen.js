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
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";

const OfferAcceptDoneScreen = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {/* <Icon color='#0C2A66' name='md-checkmark-circle' size={120} /> */}
      <Ionicons
        color="#0C2A66"
        name="md-checkmark-circle"
        size={120}
        style={{ marginTop: 100 }}
      />
      <Text style={styles.title}> Offer accepted </Text>
      <Text style={styles.text}>
        {" "}
        The seller will be notified once then proceed to making payment
      </Text>
      <CustomButton
        onPress={() => {
          navigation.navigate("Tabs");
        }}
        marginTop="110%"
        text="Go to Home"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "#0C2A66",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    margin: 1,
    color: "#9F9F9F",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
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
    // paddingBottom: '40%'
  },
});
export default OfferAcceptDoneScreen;
