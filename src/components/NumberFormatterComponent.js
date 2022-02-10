import React from 'react';
import NumberFormat from 'react-number-format';
import { Text } from 'react-native-elements';

export function ReactNativeNumberFormat({ value, prefix, style }) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={prefix}
      renderText={formattedValue => <Text style={style}>{formattedValue}</Text>} // <--- Don't forget this!
    />
  );
}