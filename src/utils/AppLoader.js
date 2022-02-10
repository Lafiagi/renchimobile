import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

const AppLoader = () => {
    return(
        <View style={[StyleSheet.absoluteFillObject, styles.container ]}>
            <LottieView source={require('../../assets/loader.json')} autoPlay loop></LottieView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.3)',
        zIndex: 1
    }
})
export default AppLoader;
