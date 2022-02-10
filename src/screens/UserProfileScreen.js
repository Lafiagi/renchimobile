import React, { useRef } from "react";
import { Card } from "react-native-elements";
import {View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import UserprofileItemComponent from "../components/UserprofileItemComponent";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import { loginContext } from "../context/LoginContext";
import { useContext } from "react";
const deviceWidth = Dimensions.get('window').width;
const UserProfileScreen = ({navigation}) =>{
    const [userData, _] = useContext(loginContext)
    const {first_name, last_name, token, profile_picture} = userData
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <Card containerStyle={{padding: 25, backgroundColor: '#BFB52A'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image 
                        resizeMode="cover"
                        source={{uri: profile_picture}}
                        style={{height:50, width:50, borderRadius:100}}
                    />
                    <View style={{marginLeft: 10, marginTop: 5}}>
                        <Text style={{fontWeight: 'bold', color: '#fff', fontSize:20}}>
                            {first_name +'  ' +last_name}
                        </Text>

                    </View>
                </View>
            </Card>
            <View style={{padding:5,marginLeft:0}}>
                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('EditProfileScreen');}} text='Edit Profile' icon={<AntDesign name="user" size={20} color="#1B3770" />}></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>

                <View style={{marginRight:100}}>
                    <UserprofileItemComponent onClickHandler={() =>{
                        navigation.navigate('SecurityandPrivacyScreen');}} text='Security & Privacy' icon={<EvilIcons name="lock" size={27} color="#1B3770" />}></UserprofileItemComponent>
                </View> 
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>

                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('VerificationScreen');}} text='Verification' icon={<AntDesign name="user" size={20} color="#1B3770" />}></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>

                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('UserProfileScreen');}} text='Refferal' icon={<EvilIcons name="share-google" size={28} color="#1B3770" />}></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>
  
                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('NotificationScreen');}} text='Notification' icon={<MaterialIcons name="notifications-on" size={22} color="#1B3770" />}></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>

                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('HelpandSupportScreen');}} text='Help & Support' icon={<Ionicons name="ios-help-circle-outline" size={24} color="#1B3770" />}></UserprofileItemComponent>
                <View style={{borderWidth:.5, marginTop:27, width: deviceWidth, alignSelf:'center', borderColor:'grey'}}></View>

                <UserprofileItemComponent onClickHandler={() =>{
                        
                        navigation.navigate('Signin');}} text='Logout' icon={<AntDesign name="logout" size={20} color="#1B3770" />}></UserprofileItemComponent>
            </View>
            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    scrollView: {
        minHeight: '10%',
        width: '100%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        backgroundColor: '#fff'
      },
      contentContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: '40%'
      }
})
export default UserProfileScreen;