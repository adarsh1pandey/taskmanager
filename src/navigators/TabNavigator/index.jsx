import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NAVIGATORS, STRINGS} from '../../shared/constants';
import Home from '../../screens/private/Home';
import Today from '../../screens/private/Today';
import Completed from '../../screens/private/Completed';
import Categories from '../../screens/private/Categories';
import {
  CATEGORY_ICON,
  COMPLETED_ICON,
  HOME_ICON,
  TODAY_ICON,
} from '../../assets/icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NAVIGATORS.HOME}
        component={Home}
        options={{
          tabBarLabel: STRINGS.HOME,
          tabBarIcon: ({color, size}) => (
            <HOME_ICON size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATORS.TODAY}
        component={Today}
        options={{
          tabBarLabel: STRINGS.TODAY,
          tabBarIcon: ({color, size}) => (
            <TODAY_ICON size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATORS.COMPLETED}
        component={Completed}
        options={{
          tabBarLabel: STRINGS.COMPLETED,
          tabBarIcon: ({color, size}) => (
            <COMPLETED_ICON size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATORS.CATEGORIES}
        component={Categories}
        options={{
          tabBarLabel: STRINGS.CATEGORIES,
          tabBarIcon: ({color, size}) => (
            <CATEGORY_ICON size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
