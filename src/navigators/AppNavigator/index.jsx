import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/public/Login';
import {NAVIGATORS, STRINGS} from '../../shared/constants';
import Private from '../../screens/private';
import AddEditViewTask from '../../screens/private/AddViewEditTask';
import CameraComponent from '../../components/CameraComponent';

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
        options={{headerTitle: STRINGS.ADD_EDIT_VIEW_TASK}}
      />
      <Stack.Screen
        name={NAVIGATORS.CAMERA}
        component={CameraComponent}
        options={{headerTitle: STRINGS.CAMERA}}
      />
      <Stack.Screen
        name={NAVIGATORS.IMAGE}
        component={CameraComponent}
        options={{headerTitle: STRINGS.IMAGE}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
