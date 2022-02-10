import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { Card } from "react-native-elements/dist/card/Card";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import BidsComponent from "../components/BidsComponent";
import AppLoader from "../utils/AppLoader";
import { getBids, getRequest, getMyRequests } from "../utils/getData";
import { loginContext } from "../context/LoginContext";
const ViewBidsScreen = ({navigation, route }) => {
  const [isLoading, setisLoading ] = useState(false);
  const [userData, _] = useContext(loginContext)
  const {token} = userData
  const request = route.params.req
  const {bids} = request 

  useEffect(
    ()=>{
      setisLoading(true)
      
      setisLoading(false)
    },

 [])

  
  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
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
              height: 35,
              width: 35,
              textAlign: "center",
              lineHeight: 35,
            }}
          />
        </Pressable>
        <Text style={styles.title}>View Bids</Text>
      </View>
      <Card containerStyle={styles.dashboard}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.lightWhite}>
              User:
              <Text style={styles.boldWhite}> @{request.buyer.first_name}</Text>
            </Text>

            <Text style={styles.lightWhite}>
              Destination Type:
              <Text style={styles.boldWhite}> {request.source_of_fund}</Text>
            </Text>

            <Text style={styles.lightWhite}>
              Bank Name:
              <Text style={styles.boldWhite}> {request.bank}</Text>
            </Text>
          </View>

          <View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={styles.boldWhite}>{request.current_buyer_currency}</Text>
              <Entypo
                name="triangle-right"
                size={24}
                color="#fff"
                style={{ position: "relative", bottom: 2 }}
              />
              <Text style={styles.boldWhite}>
                {request.desired_currency}
              </Text>
            </View>

            <Text style={styles.boldWhite}>
              {request.current_buyer_currency_symbol}
              {request.current_currency_amount}
            </Text>
          </View>
        </View>
      </Card>

      <View style={styles.transactions}>
        <Text style={{ color: "#313131" }}>
          {bids.length} Offer(s) available
        </Text>
      </View>
      <View
        style={{ borderTopWidth: 1, color: "#C7C7C7", marginTop: 20 }}
      ></View>
      {bids.length > 0 ? bids.map((bid, i) => {
        return ( 
          <BidsComponent
            bid={bid} 
            navigation={navigation}
            request={request}
            key={`bid${i}`}
            token={token}
          />
        );
      }): 
      <Text style={{textAlign: 'center', color: 'grey', fontSize: 20, marginTop: 100}}>
        No one has placed a Bid on this request yet.
      </Text>
    }
    </ScrollView>
    {isLoading ? <AppLoader />: null}
    </>
  );
};
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    color: "#313131",
    fontSize: 20,
    textAlign: "center",
    flexGrow: 1,
  },
  boldWhite: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  lightWhite: {
    color: "#FFFFFF",
    fontSize: 14,
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
    width: deviceWidth * 0.86,
    alignSelf: "center",
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
export default ViewBidsScreen;
