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
import { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import ViewRequestsComponent from "../components/ViewRequestsComponent";
import MyRequestsComponent from "../components/MyRequestsComponent";
import AppLoader from "../utils/AppLoader";
import { getRequests, getMyRequests } from "../utils/getData";
import { loginContext } from "../context/LoginContext";

const MyRequestsScreen = ({navigation }) => {
  const [requests, setRequests] = useState([]);
  const [userData, setUserData] = useContext(loginContext);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    getMyRequests(setRequests, userData.token, setisLoading);
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.top}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
            <Text style={styles.title}>My Requests</Text>
          </View>
        </View>
        {requests.length > 0 ? (
          requests.map((request, i) => {
            return (
              <MyRequestsComponent request={request} navigation={navigation} key={`request${i}`} />
            );
          })
        ) : isLoading ? (
          <Text
            style={{
              color: "grey",
              marginTop: deviceHeight * 0.2,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Loading Your Requests.....
          </Text>
        ) : (
          <Text
            style={{
              color: "grey",
              marginTop: deviceHeight * 0.2,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            You do not have any request at the moment
          </Text>
        )}
      </ScrollView>
      {isLoading ? <AppLoader /> : null}
    </>
  );
};
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  title: {
    color: "#0C2A66",
    fontSize: 24,
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
export default MyRequestsScreen;
