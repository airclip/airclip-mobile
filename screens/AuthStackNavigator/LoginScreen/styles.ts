import {StyleSheet} from 'react-native';
import baseStyles from '../../../styles';

export default StyleSheet.create({
  login: {
    ...baseStyles.container,
    justifyContent: 'center',
  },

  loginWrapper: {
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

  loginButton: {
    marginTop: 20,
  },

  forgotButton: {
    marginTop: 10,
  },
});
