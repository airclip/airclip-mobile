import {StyleSheet} from 'react-native';
import baseStyles from '../../../styles';

export default StyleSheet.create({
  home: {
    ...baseStyles.container,
  },

  appbar: {
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  appbarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  appbarTitleIcon: {
    marginRight: 7,
  },

  appbarTitleText: {
    color: 'white',
  },

  appbarActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
