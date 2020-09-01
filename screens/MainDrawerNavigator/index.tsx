import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, StatusBar} from 'react-native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import FeedbackScreen from './FeedbackScreen';
import AccountStackNavigator from './AccountStackNavigator';
import HelpScreen from './HelpScreen';
import DrawerContent from '../../components/DrawerContent';
import baseStyles from '../../styles';
import {colors} from '../../styles/constants';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => (
  <View style={baseStyles.container}>
    <StatusBar backgroundColor={colors.darkPrimary} barStyle="light-content" />
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Account" component={AccountStackNavigator} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  </View>
);

export default MainDrawerNavigator;
