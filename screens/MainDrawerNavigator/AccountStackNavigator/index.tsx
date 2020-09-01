import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import UpdateProfileScreen from './UpdateProfileScreen';

const Stack = createStackNavigator();

const AccountStackNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Profile">
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
  </Stack.Navigator>
);

export default AccountStackNavigator;
