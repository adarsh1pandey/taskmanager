import {View, Text} from 'react-native';
import React from 'react';
import {STRINGS} from '../../../shared/constants';
import TopTabNavigation from '../../../navigators/TopTabNavigators';

const Categories = () => {
  return (
    <View style={{flex: 1}}>
      <TopTabNavigation />
    </View>
  );
};

export default Categories;
