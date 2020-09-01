import React, {useState} from 'react';
import {View, ScrollView, Pressable, Keyboard} from 'react-native';
import {TextInput, Button, useTheme} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import baseStyles from '../../../styles';
import styles from './styles';
import BaseSimpleScreen from '../../BaseSimpleScreen';

const HelpScreen = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const onChangeMessage = (text: string) => {
    setMessage(text);
  };

  const onPressSubmit = () => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Snackbar.show({
        text:
          'Thanks for contacting us. We will reach out to you as soon as possible.',
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'OK',
          textColor: theme.colors.accent,
          onPress: () => Snackbar.dismiss(),
        },
      });
    }, 1000);
  };

  return (
    <BaseSimpleScreen title="Help & Support">
      <Pressable
        style={baseStyles.container}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <TextInput
              label="Message"
              value={message}
              onChangeText={onChangeMessage}
              mode="outlined"
              dense
              multiline
              numberOfLines={7}
            />
            <Button
              loading={loading}
              onPress={onPressSubmit}
              mode="contained"
              style={styles.submitButton}>
              Submit
            </Button>
          </View>
        </ScrollView>
      </Pressable>
    </BaseSimpleScreen>
  );
};

export default HelpScreen;
