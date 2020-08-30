import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import {colors} from '../../styles/constants';
import baseStyles from '../../styles';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <View style={baseStyles.container}>
    <StatusBar
      backgroundColor={colors.bodyBackgroundColor}
      barStyle="dark-content"
    />
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  </View>
);

export default AuthNavigator;
