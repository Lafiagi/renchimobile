import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-native-elements";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NotificationCardComponent from "../components/NotificationCardComponent";
import { getUserBids } from "../utils/getData";
import { loginContext } from "../context/LoginContext";
import { login } from "../auth/login";
import AppLoader from "../utils/AppLoader";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const NotificationScreen = ({ navigation }) => {
  const [bids, setBids] = useState([])
  const [isLoadin, setIsloading] = useState(false)
  const loginData = useContext(loginContext)
  const {token, name} = loginData[0]
  useEffect(()=>{
    setIsloading(true)
    getUserBids(setBids, token)
    setIsloading(false)
  }, [bids.length])
  const onBackPressed = () => {
    navigation.navigate("Tabs");
  };
  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View
        style={[
          styles.title,
          {
            backgroundColor: "#fff",
            alignSelf: "center",
            width: deviceWidth,
            padding: 10,
          },
        ]}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable onPress={onBackPressed}>
            <Ionicons name="chevron-back" size={28} color="#0C2A66" />
          </Pressable>

          <Text style={{ fontSize: 20, marginLeft: 80 }}>Notifications</Text>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 10,
          color: "#0C2A66",
          fontWeight: "bold",
        }}
      >
       
      </Text>
      {bids.length > 0 ? bids.map((bid, i) => {
        console.log("Our bid is", bid.bidder.first_name)
        return (
          <NotificationCardComponent key={`notification${i}`} name={bid.bidder.first_name} status={bid.bid_status} navigation={navigation} />
        );
      })
    :
    <Text style={{textAlign: 'center', fontSize: 22, maxWidth: deviceWidth * .9, color: 'gray', marginTop: 100, alignSelf:'center'}}>
      You have no notification at the moment
    </Text>
    }
    </ScrollView>
    {isLoadin ? <AppLoader /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "#0C2A66",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    flexDirection: "row",
    marginTop: deviceHeight * 0.025,
    justifyContent: "space-between",
    width: deviceWidth * 0.8,
  },
  tnxId: {
    fontSize: 17,
    color: "#606162",
  },
  date: {
    fontSize: 15,
    color: "#606162",
    textAlign: "center",
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
    padding: 0,
    backgroundColor: "#F1F1F1",
  },
  dashboard: {
    backgroundColor: "#0C2A66",
    padding: 20,
    color: "#fff",
    marginTop: 20,
    borderRadius: 5,
    textAlign: "justify",
  },
  picker: {
    flexGrow: 1,
    position: "relative",
    bottom: deviceHeight * 0.015,
    // backgroundColor: 'blue',
    width: deviceWidth * 0.19,
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
export default NotificationScreen;
