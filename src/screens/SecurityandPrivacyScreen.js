import React from "react";
import { Card } from "react-native-elements";
import {View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import UserprofileItemComponent from "../components/UserprofileItemComponent";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import CustomButton from "../components/CustomButton";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const SecurityandPrivacyScreen = ({name, accountNumber, navigation}) =>{
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
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
                <Text style={{
                            color: '#0C2A66',
                            fontSize:22, 
                            marginLeft: 10,
                            fontWeight: 'bold'
                            }}>
                                Security & Privacy
                </Text>
            </View>
            <View style={{padding:0, marginTop:30}}>
                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('ChangePasswordScreen');}} text='Change Password'></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>
                {/* <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('ChangeEmailScreen');}} text='Change Email'></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>
                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('ChangePinScreen');}} text='Change PIN'></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View> */}
            </View>
            
            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        color: '#0C2A66',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1, 
        flexDirection: 'row',
        marginTop: deviceHeight *.025,
        // justifyContent: 'space-between',
        width: deviceWidth,
        
      },
    scrollView: {
        minHeight: '10%',
        width: '100%',
        margin: 20,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff'
      },
      contentContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: '40%'
      }
})
export default SecurityandPrivacyScreen;