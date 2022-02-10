import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import CustomLabel from "../components/CustomLabel";
import CurrencyInput from "react-native-currency-input";
import { Ionicons } from "@expo/vector-icons";
import axios from "../api/requests";
import { getCurrencies, getCountries } from "../utils/getData";
import AppLoader from "../utils/AppLoader";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import showToast from "../utils/util";
import { useContext } from "react";
import { loginContext } from "../context/LoginContext";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const RequestCurrencyComponent = ({ route, navigation }) => {
  const [userData, _] = useContext(loginContext);
  const { token } = userData;
  const setTnx = route.params.setTnx;
  const [amount, setAmount] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [wantedCurrency, setWantedCurrency] = useState('Select the currency you want');
  const [CurrentCurrencySymbol, setCurrentCurrencySymbol] = useState('');
  const [currentCurrency, setCurrentCurrency] = useState('Select the currency you have');
  const [destinationAccount, setDestinationAccount] = useState("Onshore");
  const [country, setCountry] = useState();
  const [accountNumber, setAccountNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getCountries(setCountries);
    getCurrencies(setCurrencies);
    setisLoading(false);
  }, []);
  useEffect(()=>{
    currencies.filter((item) =>{
      item.id === currentCurrency
        ? setCurrentCurrencySymbol(item.symbol)
        : null
  }
    );
  }, [currentCurrency])
  const countriesdata = countries.map((country) => {
    return { label: country.name, value: country.id };
  });
  const currencydata = currencies.map((currency) => {
    return { label: currency.name, value: currency.id };
  });

  const sendExchangeRequest = () => {
    setisLoading(true);
    let formdata = new FormData();
    amount ? formdata.append("current_currency_amount", amount):formdata.append("current_currency_amount", 0)
    if (wantedCurrency) formdata.append("desired_currency", wantedCurrency);
    if (currentCurrency)
      formdata.append("current_buyer_currency", currentCurrency);
    if (destinationAccount)
      formdata.append("source_of_fund", destinationAccount);
    if (accountNumber) formdata.append("account_number", accountNumber);
    if (country) formdata.append("country", country);
    console.log("Currency excahnge amount is:", amount);
    axios
      .post("/exchange_request/", formdata, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setisLoading(false);
        showToast("success", "Success", "Successfully sent exhchange request.");
        navigation.navigate("RequestDoneScreen", { setTnx: setTnx });
      })
      .catch((error) => {
        setisLoading(false);
        setErrorMsg(error.message);

        showToast("error", "Failure", errorMsg);
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
        <View style={{ maxWidth: 40, maxHeight: 60 }}>
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
        </View>
        <Text style={styles.title}> Request Currency</Text>
        <Text style={styles.subtitle}> Request Details</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#BABABA",
          }}
        />
        <CustomLabel text="Select currency you have" />

        <Dropdown
          data={currencydata}
          value={currentCurrency}
          onChangeText={(value) => {
            setCurrentCurrency(value);
            
          }}
          style={styles.drop}
          baseColor="rgba(0, 0, 0)"
        />
        <CustomLabel text="Enter amount" />
        {/* <CustomInput
          placeholder="0.0"
          setValue={setAmount}
          value={amount}
          keyboardType="phone-pad"
        /> */}
        <CurrencyInput
          value={amount}
          onChangeValue={setAmount}
          prefix={CurrentCurrencySymbol + ' '}
          delimiter=","
          separator="."
          precision={2}
          style={styles.CurrencyInput}
        />
        <CustomLabel text="Select currency you want" />
        <Dropdown
          data={currencydata}
          value={wantedCurrency}
          onChangeText={(value) => {
            setWantedCurrency(value);
          }}
          style={styles.drop}
          baseColor="rgba(0, 0, 0)"
        />

        <Text style={styles.subtitle}> Destination Account Details</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#BABABA",
          }}
        />

        <CustomLabel text="Select Destination Account" />
        <Dropdown
          data={[
            { label: "Offshore", value: "Offshore" },
            { label: "Onshore", value: "Onshore" },
          ]}
          value={destinationAccount}
          onChangeText={(value) => {
            setDestinationAccount(value);
          }}
          style={styles.drop}
          baseColor="rgba(0, 0, 0)"
        />

        {destinationAccount === "Offshore" ? (
          <>
            <CustomLabel text="Select country" />
            <Dropdown
              labelFontSize={15}
              data={countriesdata}
              value={country}
              onChangeText={(value) => {
                setCountry(value);
              }}
              style={styles.drop}
              baseColor="rgba(0, 0, 0)"
            />
          </>
        ) : null}

        <CustomLabel text="Enter Account Number" />
        <CustomInput
          placeholder="0121347788"
          setValue={setAccountNumber}
          value={accountNumber}
          keyboardType="phone-pad"
        />
        <CustomButton onPress={sendExchangeRequest} text="Submit" />
      </ScrollView>
      {isLoading ? <AppLoader /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  logo: { width: "70%", maxHeight: 200, maxWidth: 300 },
  drop: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#C8C8C8",
    height: 55,
  },
  root: { alignItems: "center", padding: 20 },
  title: {
    color: "#0C2A66",
    fontSize: 27,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#303030",
    fontSize: 20,
    marginVertical: 39,
    fontWeight: "bold",
  },
  link: { color: "#0C2A66", fontWeight: "bold" },
  text: { margin: 1, color: "#677AA0" },
  label: {
    color: "#000",
    fontSize: 15,
    marginTop: 20,
    marginVertical: -10,
    marginLeft: "-87%",
  },

  scrollView: {
    minHeight: "10%",
    width: "100%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  CurrencyInput: {
    backgroundColor: "white",
    width: deviceWidth * 0.891,
    borderColor: "#E4E4E4",
    borderRadius: 6,
    borderWidth: 1.5,
    marginVertical: 5,
    height: deviceHeight * 0.08,
    maxHeight: "70%",
    fontSize: 18 ,
    paddingLeft: 15,
  },
  contentContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: "40%",
  },
});
export default RequestCurrencyComponent;
