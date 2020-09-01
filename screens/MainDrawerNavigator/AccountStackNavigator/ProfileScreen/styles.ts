import {StyleSheet} from 'react-native';
import baseStyles from '../../../../styles';

export default StyleSheet.create({
  content: {
    ...baseStyles.container,
  },

  profileBrief: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
  },

  avatar: {
    backgroundColor: 'transparent',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  email: {
    fontSize: 14,
  },

  settingsListContainer: {
    flex: 1,
  },
});
