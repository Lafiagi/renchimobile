import React from "react";
import { Card } from "react-native-elements";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import CustomButton from "../components/CustomButton";
import { Dimensions } from "react-native";
import DateComponent from "../components/DateComponent";
import { useState, useContext } from "react";
import * as DocumentPicker from "expo-document-picker";
import axios from "../api/auth";
import showToast from "../utils/util";
import AppLoader from "../utils/AppLoader";
import UploadProgress from "../utils/UploadProgress";
import { loginContext } from "../context/LoginContext";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const EditProfileScreen = ({accountNumber, navigation }) => {
  const [Firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DOB, setDOB] = useState("01/01/1980");
  const [Photo, setPhoto] = useState("");
  const [isLoading, setisLoading] = useState(false);
  // const [userData, setUserData] = useState({});   
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useContext(loginContext)
  const {token, first_name, last_name, phone, dob, id, profile_picture} = userData
  const uploadImage = () => {
    DocumentPicker.getDocumentAsync({ type: "image/*" }).then((document) => {
      setPhoto(document);
    });
  };

  let formdata = new FormData();
  if (Firstname) formdata.append("first_name", Firstname);
  if (surname) formdata.append("last_name", surname);
  if (phoneNumber) formdata.append("phone", phoneNumber);
  if (DOB) formdata.append("dob", DOB);
  if (Photo) {
    formdata.append("profile_picture", {
      uri:
        Platform.OS === "android"
          ? Photo.uri
          : Photo.uri.replace("file://", ""),
      name: Photo.name,
      type: Photo.mimeType,
    });
  }
  const sendVerificationRequest = () => {
    setisLoading(true);

    axios
      .patch(`/update_user/${id}/`, formdata, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
        // onUploadProgress: ({ loaded, total }) => {
        //   setUploadProgress(loaded / total);
        // },
      })
      .then((response) => {
        setisLoading(false);
        setUserData(response.data)
        showToast("success", "Success", "Successfully updated your profile");
        navigation.goBack();
      })
      .catch((error) => {
        setErrorMsg(error.m);
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
              fontSize: 22,
              marginLeft: 10,
            }}
          >
            Edit Profile
          </Text>
        </View>
        <Card containerStyle={{ padding: 25, borderRadius: 8 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              resizeMode="cover"
              source={{
                uri: profile_picture,
              }}
              style={{ height: 100, width: 100, borderRadius: 100 }}
            />
            <View style={{ maxWidth: "50%" }}>
              <Text style={{ color: "#2A4579", textAlign: "center" }}>
                Image must be at least 700 X 700px as jpg or png
              </Text>
              <Text
                style={{ textAlign: "center", color: "green", marginTop: 10 }}
              >
                {Photo ? Photo.name : null}
              </Text>

              <Pressable
                style={{
                  padding: 10,
                  backgroundColor: "#2A9ED9",
                  borderRadius: 5,
                  marginTop: 10,
                }}
                onPress={uploadImage}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Upload photo
                </Text>
              </Pressable>
            </View>
          </View>
        </Card>
        <View style={{ padding: 20 }}>
          <CustomLabel text="Firstname" />
          <CustomInput setValue={setFirstname} value={Firstname} defaultValue={first_name}/>

          <CustomLabel text="Surname" />
          <CustomInput setValue={setSurname} value={surname} defaultValue={last_name}/>

          <CustomLabel text="Phone number" />
          <CustomInput setValue={setPhoneNumber} value={phoneNumber} defaultValue={phone} keyboardType="phone-pad"/>

          <CustomLabel text="DOB" />
          <DateComponent setDate={setDOB} date={DOB} defaultValue={dob}/>
          <View style={{ marginTop: 50 }}>
            <CustomButton text="Save" onPress={sendVerificationRequest} />
          </View>
        </View>
      </ScrollView>
      {isLoading ? <AppLoader /> : null}
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
export default EditProfileScreen;
