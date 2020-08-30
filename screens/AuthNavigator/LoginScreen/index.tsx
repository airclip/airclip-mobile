import React from 'react';
import {View, Image, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import styles from './styles';
import {colors} from '../../../styles/constants';

const LoginScreen = () => {
  const theme = useTheme();

  return (
    <View style={styles.loginScreen}>
      {/* <Image
        source={require('../../../assets/images/logo.png')}
        style={{width: 50, height: 50}}
      /> */}
      <Text>Login</Text>
    </View>
  );
};

export default LoginScreen;
