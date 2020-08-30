import {StyleSheet} from 'react-native';
import baseStyles from '../../styles';

export default StyleSheet.create({
  drawerContent: {
    ...baseStyles.container,
  },

  profileContainer: {
    padding: 20,
  },

  avatarContainer: {
    marginBottom: 15,
    alignSelf: 'flex-start',
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

  routesList: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  mainRootList: {
    flex: 1,
  },

  footerRootList: {},
});
