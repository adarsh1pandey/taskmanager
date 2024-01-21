import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/public/Login';
import {NAVIGATORS} from '../../shared/constants';
import Private from '../../screens/private';
import AddEditViewTask from '../../screens/private/AddViewEditTask/AddEditViewTask';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATORS.LOGIN}>
      <Stack.Screen
        name={NAVIGATORS.PRIVATE}
        component={Private}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATORS.ADD_EDIT_VIEW_TASK}
        component={AddEditViewTask}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;