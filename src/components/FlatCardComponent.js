import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
const FlatCardComponent = ({text, icon, bgColor='#fff'}) => {
  return (
    <View style={styles.container}>
      
          <Card containerStyle={{ padding: 10, backgroundColor:'#F4F2DB' }}>
          <Ionicons name={icon} size={34} color="#0C2A66" />
            <Text style={styles.fonts} h5>
              {text}
            </Text>
          </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      width: 160
    
  },
  fonts: {
    marginTop: 25,
    color: '#000'
  }
});

export default FlatCardComponent;