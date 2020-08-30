import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import FeedbackScreen from './FeedbackScreen';
import UserProfileScreen from './UserProfileScreen';
import HelpScreen from './HelpScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
    <Drawer.Screen name="Feedback" component={FeedbackScreen} />
    <Drawer.Screen name="Help" component={HelpScreen} />
  </Drawer.Navigator>
);

export default MainDrawerNavigator;
