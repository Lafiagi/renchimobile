import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  BackHandler
} from "react-native";
import { useState, useEffect } from "react";
import { Card } from "react-native-elements/dist/card/Card";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";
import { getTnxs } from "../utils/getData";
import { useContext } from "react";
import { loginContext } from "../context/LoginContext";
import { EvilIcons } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  const length = navigation.getState().routes.length
  const [tnx, setTnx] = useState([])
  const [userData, setUserData] = useContext(loginContext);
  const {token, first_name, profile_picture}  = userData;
  console.log("Profile pictur value", profile_picture)
  const onNotificationPressed = () => {
    navigation.navigate("Notification");
  };

  useEffect(() => {
    const backAction = () => {
      if(navigation.isFocused()){
        Alert.alert("Hold on!", "Are you sure you want to exit renchi?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
      }
      else{
        navigation.goBack()
      }
      
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

 useEffect(()=>{
  getTnxs(setTnx, token)
 }, [])
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.top}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {profile_picture ? <Image source={{uri:profile_picture}} style={styles.img} /> : <EvilIcons name="user" size={40} color="black" />}
          <Text style={styles.title}>Hi, {first_name}!</Text>
        </View>
        <Pressable onPress={onNotificationPressed}>
          <FontAwesome
            name="bell"
            size={24}
            color="black"
            style={{
              color: "#0C2A66",
              backgroundColor: "#EBEBEB",
              padding: 10,
              borderRadius: 20,
            }}
          />
        </Pressable>
      </View>
      <Text style={styles.dashboard}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      {/* <HorizontalScrollView /> */}
      <View style={styles.cardContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("RequestCurrency", {setTnx: setTnx});
          }}
        >
          <Card containerStyle={styles.card}>
            <FontAwesome
              name="send-o"
              size={15}
              color="black"
              style={{
                backgroundColor: "#0C2A66",
                lineHeight: 38,
                color: "#fff",
                width: 40,
                height: 40,
                borderRadius: 40,
                textAlign: "center",
              }}
            />
            <Text>Request currency</Text>
          </Card>
        </Pressable>
        <Card containerStyle={styles.card}>
          <Pressable
            onPress={() => {
              navigation.navigate("ViewRequest");
            }}
          >
            <FontAwesome
              name="send-o"
              size={15}
              color="black"
              style={{
                backgroundColor: "#0C2A66",
                lineHeight: 40,
                color: "#fff",
                width: 40,
                height: 40,
                borderRadius: 40,
                textAlign: "center",
              }}
            />
            <Text>View Requests</Text>
          </Pressable>
        </Card>

        <Card containerStyle={styles.card}>
          <Pressable
            onPress={() => {
              navigation.navigate("MyRequests");
            }}
          >
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{
                backgroundColor: "#0C2A66",
                color: "#fff",
                width: 25,
                borderRadius: 25,
                width: 40,
                lineHeight: 40,
                height: 40,
                borderRadius: 40,
                textAlign: "center",
              }}
            />
            <Text>My Requests</Text>
          </Pressable>
        </Card>
      </View>
      <View style={styles.transactions}>
        <Text style={{ color: "#586D96" }}>Transactions</Text>
        {tnx.length > 0? <Pressable
          onPress={() => {
            navigation.navigate("TransactionHistoryScreen", {tnx: tnx});
          }}
        >
          <Text style={{ color: "#BDBDBD" }}> See all</Text>
        </Pressable>
        :
        null
}
      </View>
      { tnx.length > 0 ? tnx.map((t, i) => {
        return (
          <TransactionHistoryComponent
          tnx={t}
          key={`history${i}`}
          />
        );
      })
    : <Text style={{textAlign:'center', color: 'grey', marginTop: 100}}>
      No Recent transactions found
    </Text>
    }
    </ScrollView>
  );
};
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    color: "#0C2A66",
    fontSize: 20,
    fontWeight: "bold",
    position: "relative",
    top: 10,
    left: 15,
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
    backgroundColor: "#EBEBEB",
    borderWidth: 0,
  },
  transactions: {
    marginTop: 40,
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
export default DashboardScreen;
