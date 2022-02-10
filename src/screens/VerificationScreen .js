import React from "react";
import { Card } from "react-native-elements";
import { View, Text, ScrollView, StyleSheet, ToastAndroid } from "react-native";
import UserprofileItemComponent from "../components/UserprofileItemComponent";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import { Dimensions } from "react-native";
import DateComponent from "../components/DateComponent";
import SwitchNotificationComponent from "../components/SwitchNotificationComponent";
import DropdownComponent from "../components/DropdownCompmonent";
import ProgressBar from "react-native-progress/Bar";
import { useState, useContext } from "react";
import UploadProgress from "../utils/UploadProgress";
import * as DocumentPicker from "expo-document-picker";
import axios from "../api/auth";
import showToast from "../utils/util";
import { loginContext } from "../context/LoginContext";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const VerificationScreen = ({ navigation }) => {
  const [BVN, setBVN] = useState("");
  const [idType, setidType] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [userData, _] = useContext(loginContext)
  const {token} = userData
  const uploadImage = () => {
    DocumentPicker.getDocumentAsync((type = "image/*")).then((document) => {
      setFile(document);
      setFileName(document.name);
    });
  };

  let formdata = new FormData();
  formdata.append("bvn", BVN);
  formdata.append("id_card_type", idType);
  formdata.append("id_card", {
    uri: Platform.OS === "android" ? file.uri : file.uri.replace("file://", ""),
    name: fileName,
    type: file.mimeType,
  });
  const sendVerificationRequest = () => {
    setisLoading(true);
    axios
      .post("/upload_documents/", formdata, {
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
        showToast(
          (type = "success"),
          (title = "Success"),
          (msg = "Successfully uploaded your credentials for verification ")
        );
        navigation.goBack();
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setisLoading(false);
        showToast(
          type = "error",
          title = "Failure",
          (msg = "There was an error, please try again")
        );
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
                borderRadius: 40,
                height: 35,
                width: 35,
                textAlign: "center",
                lineHeight: 35,
                marginLeft: 10,
              }}
            />
          </Pressable>
          <Text
            style={{
              color: "#0C2A66",
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Verification
          </Text>
        </View>

        <View
          style={{
            maxWidth: deviceWidth * 0.88,
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          <CustomLabel text="Bank Verification Number (BVN)" />
          <CustomInput setValue={setBVN} value={BVN} />
        </View>

        <View
          style={{ maxWidth: deviceWidth * 0.88, marginLeft: 15, marginTop: 0 }}
        >
          <CustomLabel text="ID Type:" />
          <DropdownComponent
            defaultItems={[
              {
                label: "International Passport",
                value: "International Passport",
              },
              { label: "Voters Card", value: "Voters Card" },
              { label: "National ID", value: "National ID" },
              { label: "Others", value: "Others" },
            ]}
            setValue={setidType}
            value={idType}
          />
        </View>

        <View
          style={{
            maxWidth: deviceWidth * 0.88,
            marginLeft: 15,
            marginTop: 50,
          }}
        >
          <Pressable
            style={{
              borderRadius: 5,
              padding: 10,
              borderWidth: 1,
              borderColor: "#C2C2C2",
            }}
          >
            <Text
              style={{ fontSize: 15, textAlign: "center", color: "#0C2A66" }}
              onPress={uploadImage}
            >
              <MaterialIcons name="cloud-upload" size={24} color="#0C2A66" />{" "}
              Upload file
            </Text>
          </Pressable>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
            {fileName ? (
              <AntDesign name="picture" size={24} color="#3A5283" null />
            ) : null}
            <Text style={{ color: "#3A5283", fontSize: 18 }}>{fileName}</Text>
          </View>
        </View>
        {isLoading ? <UploadProgress progress={uploadProgress} /> : null}
        <Text style={{ color: "red", width: 100, textAlign: "center" }}>
          {errorMsg.toString()}
        </Text>
        <View
          style={{
            maxWidth: deviceWidth * 0.9,
            marginLeft: deviceWidth * 0.05,
            marginTop: deviceHeight * 0.05,
          }}
        >
          <CustomButton text="Save" onPress={sendVerificationRequest} />
        </View>
      </ScrollView>
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
    // justifyContent: 'space-between',
    width: deviceWidth * 0.8,
  },
  scrollView: {
    minHeight: "10%",
    width: "100%",
    margin: 20,
    alignSelf: "center",
    padding: 5,
    backgroundColor: "#fff",
  },
  contentContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: "40%",
  },
});
export default VerificationScreen;
