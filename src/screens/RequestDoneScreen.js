import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { getTnxs } from "../utils/getData";
const RequestDoneScreen = ({ route, navigation }) => {
  const setTnx = route.params.setTnx;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <Ionicons
        color="#0C2A66"
        name="md-checkmark-circle"
        size={120}
        style={{ marginTop: 100 }}
      />
      <Text style={styles.title}> Request Sent </Text>
      <Text style={styles.text}>
        {" "}
        Your request has been sent, you can check the status of your request on
        the "My request" page
      </Text>
      <CustomButton
        onPress={() => {
          getTnxs(setTnx);
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
    textAlign: "justify",
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
  },
});
export default RequestDoneScreen;
