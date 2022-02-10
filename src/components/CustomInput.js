import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions. get('window').height;
const deviceWidth = Dimensions. get('window').width;
const CustomInput = ({value=undefined, setValue, placeholder, secureTextEntry, keyboardType, ref, defaultValue}) =>{
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                secureTextEntry={secureTextEntry}
                onChangeText={(value) =>{setValue(value)}}
                keyboardType={keyboardType}
                placeholder={placeholder}
                value={value}
                ref={ref}
                // defaultValue={defaultValue}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    input: {

        backgroundColor: "white", 
                width: deviceWidth * 0.891, 
                borderColor: '#E4E4E4',
                borderRadius: 6, 
                borderWidth:1.5,
                marginVertical: 5,
                minHeight: "8%",
                height: deviceHeight * .101,
                maxHeight: '70%', 
                paddingLeft:15, 
    },
    // container: {backgroundColor: "white", 
    //             width: '100%', borderColor: '#E4E4E4',
    //             borderRadius: 6, borderWidth:1,
    //             marginVertical: 5,
    //             minHeight: "8%",
    //             // keyboardType: ,

    //         }
})
export default CustomInput;  