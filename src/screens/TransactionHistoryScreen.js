import React, {useEffect, useContext} from "react";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { getTnxs } from "../utils/getData";
import { loginContext } from "../context/LoginContext";
import AppLoader from "../utils/AppLoader";
const TransactionHistoryScreen = ({route, navigation }) => {
  const [tnx, setTnx] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userData, _] = useContext(loginContext)
  const {token} = userData 
  useEffect(()=>{
    setIsLoading(true)
    getTnxs(setTnx, token)
    setIsLoading(false)
   }, [])
  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.title}>
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
              borderRadius: 50,
              height: 40,
              width: 40,
              lineHeight: 40,
              textAlign: "center",
            }}
          />
        </Pressable>
        <Text style={{ color: "#0C2A66", fontWeight: "bold", fontSize: 20, marginRight: 100 }}>
          Transactions
        </Text>
        {/* <FontAwesome
          name="sliders"
          size={24}
          color="#0C2A66"
          style={{
            backgroundColor: "#EBEBEB",
            borderRadius: 40,
            height: 40,
            width: 40,
            lineHeight: 38,
            textAlign: "center",
          }}
        /> */}
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
    {isLoading? <AppLoader />: null}
    </>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    color: "#0C2A66",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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

export default TransactionHistoryScreen;
