import tw from '@config/tailwind.config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { DashboardStackParamList } from '@types';
import { Avatar } from 'react-native-paper';
import { AlertsStack } from './AlertsStack';
import { HomeStack } from './HomeStack';
import { ProductsStack } from './ProductsStack';
import { LocationsStack } from './LocationsStack';
import { SettingsStack } from './SettingsStack';
import React from 'react';
import { CategoriesStack } from './CategoriesStack';

const Stack = createBottomTabNavigator<DashboardStackParamList>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: tw.style('bg-primary'),
      }}>
      <Stack.Screen
        name='Home'
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: tw.color('secondary'),
          tabBarIcon: () => <Avatar.Icon size={40} icon='home' />,
        }}
      />
      <Stack.Screen
        name='Products'
        component={ProductsStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: tw.color('secondary'),
          tabBarIcon: () => <Avatar.Icon size={40} icon='food' />,
        }}
      />
      <Stack.Screen
        name='Locations'
        component={LocationsStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: tw.color('secondary'),
          tabBarIcon: () => <Avatar.Icon size={40} icon='map' />,
        }}
      />
      <Stack.Screen
        name='Alerts'
        component={AlertsStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: tw.color('secondary'),
          tabBarIcon: () => <Avatar.Icon size={40} icon='bell' />,
        }}
      />
      <Stack.Screen
        name='Categories'
        component={CategoriesStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: tw.color('secondary'),
          tabBarIcon: () => <Avatar.Icon size={40} icon='map' />,
        }}
      />
      <Stack.Screen
        name='Settings'
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: tw.color('secondary'),
          tabBarIcon: () => <Avatar.Icon size={40} icon='cog' />,
        }}
      />
    </Stack.Navigator>
  );
};
