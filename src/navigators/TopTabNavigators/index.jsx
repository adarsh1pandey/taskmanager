import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {NAVIGATORS} from '../../shared/constants';
import Work from '../../screens/private/Work';
import Personal from '../../screens/private/Personal';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={NAVIGATORS.WORK} component={Work} />
      <Tab.Screen name={NAVIGATORS.PERSONAL} component={Personal} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
