import {StyleSheet} from 'react-native';
import baseStyles from '../../../../styles';

export default StyleSheet.create({
  content: {
    ...baseStyles.container,
    paddingTop: 100,
  },

  scrollViewContent: {
    alignItems: 'center',
  },

  formContainer: {
    width: '100%',
    maxWidth: 340,
  },

  signupButton: {
    marginTop: 20,
  },
});
