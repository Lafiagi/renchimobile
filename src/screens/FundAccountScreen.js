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
import { Card } from "react-native-elements/dist/card/Card";
import CustomLabel from "../components/CustomLabel";
import DropdownComponent from "../components/DropdownCompmonent";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import BottomStickyButton from "../components/BottomStickyButton";
import * as DocumentPicker from "expo-document-picker";
import AppLoader from "../utils/AppLoader";
import axios from "../api/requests";
import UploadProgress from "../utils/UploadProgress";
import showToast from "../utils/util";
import { loginContext } from "../context/LoginContext";
const FundAccountScreen = ({ route, navigation }) => {
  const bid = route.params.bid;
  const request = route.params.request;
  const { height } = useWindowDimensions();
  const [tnxid, setTnxid] = useState("");
  const [receipt, setReceipt] = useState("");
  const [mode, setMode] = useState("");
  const [isLoading, setisLoading] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, _] = useContext(loginContext);
  const {token} = userData
  const uploadImage = () => {
    DocumentPicker.getDocumentAsync({ type: "image/*" }).then((document) => {
      setReceipt(document);
    });
  };

  const sendPaymentEvidence = () => {
    setisLoading(true);
    let formdata = new FormData();
    if (mode) formdata.append("payment_mode", mode);
    if (tnxid) formdata.append("tnx_id", tnxid);
    if (receipt) {
      formdata.append("receipt", {
        uri:
          Platform.OS === "android"
            ? receipt.uri
            : receipt.uri.replace("file://", ""),
        name: receipt.name,
        type: receipt.mimeType,
      });
    }
    axios
      .post("/upload_payment_evidence/", formdata, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
        onUploadProgress: ({ loaded, total }) => {
          setUploadProgress(loaded / total);
        },
      })
      .then((response) => {
        setisLoading(false);
        showToast("success", "Success", "Successfully Uploaded your reciept");

        navigation.navigate("OfferAcceptDoneScreen", {
          paramsKey: { tnxid: tnxid, receipt: receipt, mode: mode },
        });
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setisLoading(false);
        showToast("error", "Failure", "There was an error, please try again");
        console.log("There was an error " + error);
      });
  };
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
                size={28}
                color="#0C2A66"
                style={{
                  backgroundColor: "#E1E1E1",
                  borderRadius: 40,
                  height: 35,
                  width: 35,
                  textAlign: "center",
                  lineHeight: 35,
                  marginLeft: 5,
                }}
              />
            </Pressable>
            <Text style={styles.title}>Fund Account</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ textAlign: "center", color: "#606060", fontSize: 15 }}>
            To complete this transaction, please pay the transaction amount to
            account details below and upload confirmation receipt here.
          </Text>
        </View>

        <Card containerStyle={styles.card}>
          <View style={styles.container}>
            <Text style={{ color: "#fff" }}>Payment account details</Text>
            <View style={{ marginTop: 15 }}>
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                <Text style={{ color: "#ffffff", fontWeight: "normal" }}>
                  Bank Name:{" "}
                </Text>{" "}
                {request.bank}
              </Text>

              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                <Text style={{ color: "#ffffff", fontWeight: "normal" }}>
                  Account Number:{" "}
                </Text>{" "}
                {request.account_number}
              </Text>
            </View>
          </View>
        </Card>

        <Text
          style={{
            marginTop: 20,
            fontSize: 17,
            fontWeight: "bold",
            color: "#404040",
          }}
        >
          Payment confirmation details
        </Text>
        <CustomLabel text="Payment mode" />
        <DropdownComponent
          defaultItems={[
            { label: "Bank Transfer", value: "Bank Transfer" },
            { label: "USSD", value: "USSD" },
            { label: "Cheque", value: "Cheque" },
            { label: "Bank Deposit", value: "Bank Deposit" },
          ]}
          placeholder=""
          setValue={setMode}
          value={mode}
        />

        <CustomLabel text="Enter Transaction ID" />
        <CustomInput
          setValue={setTnxid}
          value={tnxid}
          placeholder=""
          keyboardType="phone-pad"
        />

        <CustomLabel text="Upload receipt" />
        {receipt.name? <Text style={{color:'green', fontStyle:'italic'}}>{receipt.name}</Text> : null}
        <CustomButton text="Upload here" type="GREY" onPress={uploadImage} />
        <View style={{ marginTop: 150 }}></View>
        <BottomStickyButton
          text="Submit Payment Evidence"
          type="PRIMARY"
          marginTop="-30%"
          onPress={sendPaymentEvidence}
        />
      </ScrollView>
      {isLoading ? <AppLoader /> : null}
    </>
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
    width: deviceWidth * 0.89,
    margin: "auto",
    marginTop: 20,
    borderColor: "#D1D1D1",
    borderRadius: 7,
    backgroundColor: "#0C2A66",
    padding: 25,
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
export default FundAccountScreen;
