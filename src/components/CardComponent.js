import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card} from 'react-native-elements';

const CardComponent = ({currencyName, currencySymbol, balance, bgColor}) => {
  return (
    <>
      
          <Card containerStyle={{ marginTop: 15, borderRadius:20, padding: 50, backgroundColor: bgColor, }}>
            <Card.Title style={{color: '#fff'}}>{currencyName}</Card.Title>
            <Text style={styles.fonts} h2>
              {currencySymbol} {balance}
            </Text>
          </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  fonts: {
    marginBottom: 8,
    color: '#fff'
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CardComponent;