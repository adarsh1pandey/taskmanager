import {View, Text} from 'react-native';
import React from 'react';
import {STRINGS} from '../../../shared/constants';

const Categories = () => {
  return (
    <View>
      <Text>{STRINGS.TWO_CATEGORIES}</Text>
      <Text>{STRINGS.WORK}</Text>
    </View>
  );
};

export default Categories;
