import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/public/Login';
import {NAVIGATORS} from '../../shared/constants';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATORS.LOGIN}>
      <Stack.Screen name={NAVIGATORS.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
