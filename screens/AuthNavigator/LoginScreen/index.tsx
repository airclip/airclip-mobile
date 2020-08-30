import React, {useState} from 'react';
import {View, Image, Keyboard, Pressable} from 'react-native';
import {TextInput, HelperText, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import baseStyles from '../../../styles';
import {validateEmail} from '../../../utils';

type Props = {
  route: any;
  navigation: any;
};

const LoginScreen = ({route, navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (text: string) => {
    let errMsg = '';

    if (!validateEmail(text)) {
      errMsg = 'Invalid email entered';
    }

    setEmail({
      value: text,
      error: errMsg,
    });
  };

  const onChangePassword = (text: string) => {
    setPassword({
      value: text,
      error: '',
    });
  };

  const onPressLogin = () => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onPressForgotButton = () => {
    navigation.navigate('ForgotPassword');
  };

  const onPressGotoSignupButton = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={baseStyles.container}>
      <Pressable
        style={baseStyles.container}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.login}>
          <View style={styles.loginWrapper}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
            />
            <View style={styles.formContainer}>
              <View>
                <TextInput
                  label="Email"
                  value={email.value}
                  onChangeText={onChangeEmail}
                  mode="outlined"
                  dense
                  error={!!email.error}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
                <HelperText type="error" visible={!!email.error}>
                  {email.error}
                </HelperText>
              </View>
              <View>
                <TextInput
                  label="Password"
                  value={password.value}
                  onChangeText={onChangePassword}
                  mode="outlined"
                  dense
                  error={!!password.error}
                  keyboardType="default"
                  textContentType="password"
                  secureTextEntry
                />
                <HelperText type="error" visible={!!password.error}>
                  {password.error}
                </HelperText>
              </View>
              <Button
                loading={loading}
                onPress={onPressLogin}
                mode="contained"
                style={styles.loginButton}>
                Login
              </Button>
              <Button
                onPress={onPressForgotButton}
                mode="text"
                uppercase={false}
                style={styles.forgotButton}>
                Forgot password?
              </Button>
              <Button
                onPress={onPressGotoSignupButton}
                mode="text"
                uppercase={false}>
                Don't have an account? Register
              </Button>
            </View>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;
