import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
