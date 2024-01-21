import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../AuthNavigator';
import AppNavigator from '../AppNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
