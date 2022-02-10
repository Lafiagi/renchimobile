import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Dimensions } from "react-native";
import { acceptBid } from "../utils/getData";
const deviceWidth = Dimensions.get("window").width;
const BidsComponent = ({ bid, navigation, request, token }) => {
  return (
    <View style={styles.txnDetails}>
      <View>
        <Text style={styles.historyName}>@{bid.bidder.first_name}</Text>
        <Text
          style={[styles.historyAmount, { color: "#0C2A66", fontSize: 20 }]}
        >
          {bid.exchange_request.desired_currency_symbol}
          {bid.amount}
        </Text>
        <Text style={styles.historyAmount}>{bid.rate}/1</Text>
      </View>
      <View>
        <Pressable
          style={{ backgroundColor: "#EAEAEA", padding: 8 }}
          onPress={() => {
            
            acceptBid(bid, request, token, navigation)
          }}
        >
          <Text style={{ color: "#0C2A66" }}>Accept Offer</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  historyName: {
    color: "#B9B9B9",
    fontWeight: "normal",
  },
  historyAmount: {
    fontWeight: "bold",
  },

  txnDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0,
    maxWidth: deviceWidth,
    borderBottomWidth: 1.5,
    borderBottomColor: "#EBEBEB",
    marginTop: 40,
  },
});
export default BidsComponent;
