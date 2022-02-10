import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width;

const SwitchNotificationComponent = ({title, body}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flex: 1, flexDirection: 'row', maxWidth: deviceWidth * 0.9, justifyContent: 'space-between', padding:10 }}>
        <View style={{maxWidth: '80%'}}>
            <Text style={{fontSize: 25, color: '#0C2A66', fontWeight: 'bold'}}>
                {title}
            </Text>
            <Text style={{color: '#0C2A66', fontSize:17}}>
                {body}
            </Text>
        </View>
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#a3a3a3", true: "#0C2A66" }}
                thumbColor={isEnabled ? "#fff" : "#0C2A66"}
                ios_backgroundColor="#0C2A66"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: '10%', 
  }
});

export default SwitchNotificationComponent;