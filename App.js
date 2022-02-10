import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootSiblingParent } from 'react-native-root-siblings';
import SigninScreen from "./src/screens/SigninScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ResetScreen from "./src/screens/ResetScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import SetNewPasswordScreen from "./src/screens/SetNewPasswordScreen";
import ResetDoneScreen from "./src/screens/ResetDoneScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import TransactionHistoryScreen from "./src/screens/TransactionHistoryScreen";
import RequestCurrencyScreen from "./src/screens/RequestCurrencyScreen";
import RequestDoneScreen from "./src/screens/RequestDoneScreen";
import ViewRequestsScreen from "./src/screens/ViewRequestsScreen";
import AllOffersScreen from "./src/screens/AllOffersScreen";
import MakeOfferScreen from "./src/screens/MakeOfferScreen";
import AcceptedScreen from "./src/screens/AcceptedScreen";
import MyRequestsScreen from "./src/screens/MyRequestsScreen";
import ViewBidsScreen from "./src/screens/ViewBidsScreen";
import FundAccountScreen from "./src/screens/FundAccountScreen";
import TransactionDetailsScreen from "./src/screens/TransactionDetailsScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import SwitchNotificationScreen from "./src/screens/SwitchNotificationScreen";
import HelpandSupportScreen from "./src/screens/HelpandSupportScreen ";
import VerificationScreen from "./src/screens/VerificationScreen ";
import SecurityandPrivacyScreen from "./src/screens/SecurityandPrivacyScreen";
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen";
import ChangeEmailScreen from "./src/screens/ChangeEmailScreen";
import ChangePinScreen from "./src/screens/ChangePinScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import VerifyPhoneNumberScreen from "./src/screens/VerifyPhoneNumberScreen";
import OfferAcceptDoneScreen from "./src/screens/OfferAcceptDoneScreen";
import OfferSentScreen from "./src/screens/OfferSentScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Toast from 'react-native-toast-message';
import { LoginProvider } from "./src/context/LoginContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const tabs = ()=>{
  return(
  <Tab.Navigator
              screenOptions={{
                header: () => null,
              }}
  >
      <Tab.Screen name='DashboardScreen'
      component={DashboardScreen}
      options={{tabBarIcon: ()=>{
        return <Entypo name="home" 
                        size={24} 
                        color="#0C2A66" />
      },
      tabBarShowLabel: false,
    }}
      />
      <Tab.Screen 
                name='TransactionHistoryScreen'
                component={TransactionHistoryScreen}
                options={{tabBarIcon: ()=>{
                          return <AntDesign name="database" size={24} color="#0C2A66" />
                          
                        },
                        tabBarShowLabel: false,
              }}
                />
      <Tab.Screen name='UserProfileScreen' 
                  component={UserProfileScreen}
                  options={{
                          tabBarIcon: ()=>{
                                  return <FontAwesome name="user" size={24} color="#0C2A66" />
                              },
                              tabBarShowLabel: false,
                              // tabBarActiveBackgroundColor: '#'
                        }
                }
                

                  
                  />
  </Tab.Navigator>
  );
};
export default function App(props) {
  const [token, setToken] = useState();
  const [key, setKey] = useState();
  const navigation = props.navigation;
  return (
    <>
    <LoginProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}
        >
        
          <Stack.Screen name="Signin"
          >
            {props =>  { return <SigninScreen setKey={setKey} setToken={setToken} />}}
            
          </Stack.Screen>
          <Stack.Screen name="Tabs" component={tabs} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="RequestCurrency" component={RequestCurrencyScreen} />
          <Stack.Screen name="ViewRequest" component={ViewRequestsScreen} />
          <Stack.Screen name="MyRequests" component={MyRequestsScreen} />
          <Stack.Screen name="TransactionHistoryScreen" component={TransactionHistoryScreen} />
          <Stack.Screen name="VerifyPhoneNumberScreen" component={VerifyPhoneNumberScreen} />
          <Stack.Screen name="RequestDoneScreen" component={RequestDoneScreen} />
          <Stack.Screen name="MakeOfferScreen" component={MakeOfferScreen} />
          <Stack.Screen name="OfferAcceptDoneScreen" component={OfferAcceptDoneScreen} />
          <Stack.Screen name="OfferSentScreen" component={OfferSentScreen} />
          <Stack.Screen name="ViewBidsScreen" component={ViewBidsScreen} />
          <Stack.Screen name="TransactionDetailsScreen" component={TransactionDetailsScreen} />
          <Stack.Screen name="FundAccountScreen" component={FundAccountScreen} />
          <Stack.Screen name="VerificationScreen" component={VerificationScreen} /> 
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} /> 
          <Stack.Screen name="SecurityandPrivacyScreen" component={SecurityandPrivacyScreen} /> 
          <Stack.Screen name="NotificationScreen" component={SwitchNotificationScreen} /> 
          <Stack.Screen name="HelpandSupportScreen" component={HelpandSupportScreen} /> 
          <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} /> 
          <Stack.Screen name="ChangeEmailScreen" component={ChangeEmailScreen} /> 
          <Stack.Screen name="ChangePinScreen" component={ChangePinScreen} /> 
          <Stack.Screen name="AcceptedScreen" component={AcceptedScreen} /> 
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> 
          <Stack.Screen name="ResetScreen" component={ResetScreen} /> 
          <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} /> 
          <Stack.Screen name="ResetDoneScreen" component={ResetDoneScreen} /> 
          <Stack.Screen name="SignUpScreen" >
            {props =>{return <SignUpScreen setKey={setKey} setToken={setToken} />}}
          </Stack.Screen> 
        
          {/* <Stack.Screen name="VerifyPhoneNumberScreen" component={VerifyPhoneNumberScreen} />  */}
                  {/* <Stack.Screen name="MyRequests" component={MyRequestsScreen} />  */}
          {/* <Stack.Screen name="MyRequests" component={MyRequestsScreen} />  */}
          {/* <Stack.Screen name="MyRequests" component={MyRequestsScreen} />  */}

        </Stack.Navigator>
      </NavigationContainer>
      </LoginProvider>
      <Toast />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
