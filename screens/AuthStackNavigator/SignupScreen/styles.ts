import {StyleSheet} from 'react-native';
import baseStyles from '../../../styles';

export default StyleSheet.create({
  signup: {
    ...baseStyles.container,
    justifyContent: 'center',
  },

  signupWrapper: {
    alignItems: 'center',
  },

  logo: {
    ...baseStyles.logo,
    marginBottom: 100,
  },

  formContainer: {
    width: '100%',
    maxWidth: 340,
  },

  signupButton: {
    marginTop: 20,
  },

  gotoLoginButton: {
    marginTop: 10,
  },
});
