import React, {useState} from 'react';
import {View, Keyboard, Pressable} from 'react-native';
import {TextInput, HelperText, Button} from 'react-native-paper';
import styles from './styles';
import baseStyles from '../../../../styles';
import {validateEmail} from '../../../../utils';
import BaseSimpleScreen from '../../../BaseSimpleScreen';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  route: any;
  navigation: any;
};

const UpdateProfileScreen = ({route, navigation}: Props) => {
  const [fullName, setFullName] = useState({value: 'Rousan Ali', error: ''});
  const [email, setEmail] = useState({
    value: 'rousanali786@gmail.com',
    error: '',
  });
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

  const onPressSave = () => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <BaseSimpleScreen title="Update Account">
      <Pressable
        style={baseStyles.container}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
              <Button
                loading={loading}
                onPress={onPressSave}
                mode="contained"
                style={styles.signupButton}>
                Save
              </Button>
            </View>
          </ScrollView>
        </View>
      </Pressable>
    </BaseSimpleScreen>
  );
};

export default UpdateProfileScreen;
