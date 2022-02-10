import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
import ProgressBar from 'react-native-progress/Bar';
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width
const UploadProgress = ({progress}) => {
    return(
        <View style={[styles.container ]}>
            <ProgressBar progress={progress} 
                            width={deviceWidth *.88}
                            color='#8392B1'
                            unfilledColor='#0C2A66'
                            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
       alignSelf:'center',
       marginTop: 10
    }
})
export default UploadProgress;
