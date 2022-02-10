import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height
const DateComponent = ({setDate, date}) => {
  // const [date, setDate] = useState('09-10-2021');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>DOB</Text> */}
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 10,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "#C8C8C8",
              alignItems: "flex-start",
              borderWidth: 0,
              color: '#C8C8C8',
              marginTop: 10
            },
            placeholderText: {
              fontSize: 17,
              color: "#C8C8C8"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: .3,
    // backgroundColor: '#fff',
    // borderRadius: 2,
    // borderColor: '#fff',
    // borderBottomColor: '#fff',
    // height:40,
    // width:'200%',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: deviceWidth * .89,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 5,
    // borderBottomWidth: 0,
    height: deviceHeight * 0.08
  },
  text: {
    textAlign: 'left',
    width: 290,
    color : "#000"
  }
});