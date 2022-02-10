import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import { useState, useRef } from "react";

const OTPComponent = ({setPin}) => {
const [pin1, setPin1] = useState('');
const [pin2, setPin2] = useState('');
const [pin3, setPin3] = useState('');
const [pin4, setPin4] = useState('');

const pin1Ref = useRef();
const pin2Ref = useRef();
const pin3Ref = useRef();
const pin4Ref = useRef();

  return(
    <View style={{flex: 1, marginTop:100}}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <TextInput
                    ref={pin1Ref}
                    maxLength={1}
                    keyboardType='numeric'
                    value={pin1}
                    onChangeText={(pin1) => {
                        setPin1(pin1)
                        if(pin1){
                            pin2Ref.current.focus()
                        }
                        
                    }}
                    style={styles.otpBox}
            />
            <TextInput
                    ref={pin2Ref}
                    maxLength={1}
                    keyboardType='numeric'
                    value={pin2}
                    onChangeText={(pin2) => {
                        setPin2(pin2)
                        if(pin2){
                            pin3Ref.current.focus()
                        }
                        
                    }}
                    style={styles.otpBox}
            />
            <TextInput
                    ref={pin3Ref}
                    maxLength={1}
                    keyboardType='numeric'
                    value={pin3}
                    onChangeText={(pin3) => {
                        setPin3(pin3)
                        if(pin3){
                            pin4Ref.current.focus()
                        }
                        
                    }}
                    style={styles.otpBox}
            />
            <TextInput
                    ref={pin4Ref}
                    maxLength={1}
                    value={pin4}
                    keyboardType='numeric'
                    onChangeText={(pin4) => {
                        setPin4(pin4)
                        setPin(pin1+pin2+pin3+pin4)
                        
                    }}
                    style={styles.otpBox}
            />
        </View>

    </View>
  )
};

const styles = StyleSheet.create({
   otpBox: {borderWidth:1,
        width: '17%',
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#C8C8C8',
        height: 70,
        textAlign: 'center',
        fontSize:35
        
    }
})
export default OTPComponent;
