import {View, Text} from 'react-native';
import React from 'react';
import TabNavigator from '../../navigators/TabNavigator';
import styles from './styles';

const Private = () => {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};

export default Private;
