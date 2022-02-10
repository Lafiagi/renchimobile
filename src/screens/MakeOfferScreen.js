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
import { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import MakeOfferComponent from "../components/MakeOfferComponent";
import { loginContext } from '../context/LoginContext';
const MakeOfferScreen = ({route, navigation}) => {
  const exchangeRequest = route.params.request;
  const userData = useContext(loginContext)
  const token = userData[0].token

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.top}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="chevron-back"
              size={30}
              color="#0C2A66"
              style={styles.back}
            />
          </Pressable>
          <Text style={styles.title}>Make an Offer</Text>
        </View>
      </View>

      <MakeOfferComponent
        exchangeRequest={exchangeRequest}
        navigation={navigation}
        token={token}
      />
    </ScrollView>
  );
};
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    color: "#0C2A66",
    fontSize: 20,
    position: "relative",
    top: 0,
    left: deviceWidth * 0.15,
  },
  text: { margin: 1, color: "#3A5283" },
  top: {
    color: "#3A5283",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: { borderRadius: 50 },
  scrollView: {
    minHeight: "10%",
    width: "100%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  back: {
    backgroundColor: "#EBEBEB",
    borderRadius: 40,
    height: 35,
    width: 35,
    textAlign: "center",
    lineHeight: 35,
  },
  dashboard: {
    backgroundColor: "#0C2A66",
    padding: 20,
    color: "#fff",
    marginTop: 20,
    borderRadius: 5,
    textAlign: "justify",
  },
  card: {
    padding: 20,
    margin: 3.2,
    minWidth: "48%",
    backgroundColor: "#F4F2DB",
  },
  transactions: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  seeAll: {
    position: "relative",
    left: "1000%",
    backgroundColor: "green",
  },
  cardContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: "40%",
  },
});
export default MakeOfferScreen;
