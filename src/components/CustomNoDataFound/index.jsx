import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {STRINGS} from '../../shared/constants';

const CustomNoDataFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{STRINGS.DATA_NOT_FOUND}</Text>
    </View>
  );
};

export default CustomNoDataFound;
