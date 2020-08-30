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

const SignupScreen = ({route, navigation}: Props) => {
  const [fullName, setFullName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);

  const onChangeFullName = (text: string) => {
    setFullName({
      value: text,
      error: '',
    });
  };

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

  const onPressSignup = () => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onPressGotoLoginButton = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={baseStyles.container}>
      <Pressable
        style={baseStyles.container}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.signup}>
          <View style={styles.signupWrapper}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
            />
            <View style={styles.formContainer}>
              <View>
                <TextInput
                  label="Full Name"
                  value={fullName.value}
                  onChangeText={onChangeFullName}
                  mode="outlined"
                  dense
                  error={!!fullName.error}
                  keyboardType="default"
                  textContentType="name"
                />
                <HelperText type="error" visible={!!fullName.error}>
                  {fullName.error}
                </HelperText>
              </View>
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
                onPress={onPressSignup}
                mode="contained"
                style={styles.signupButton}>
                Signup
              </Button>
              <Button
                onPress={onPressGotoLoginButton}
                mode="text"
                uppercase={false}
                style={styles.gotoLoginButton}>
                Already have an account? Login
              </Button>
            </View>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignupScreen;
