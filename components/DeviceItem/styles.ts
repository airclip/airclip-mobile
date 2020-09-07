import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    elevation: 4,
  },

  contentWrapper: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 4,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
  },

  deviceIconContainer: {
    padding: 10,
    marginRight: 10,
  },

  deviceInfoContainer: {
    flex: 1,
  },

  deviceNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  deviceName: {
    fontSize: 14,
    fontWeight: '500',
  },

  deviceNameCurrent: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
  },

  osName: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 10,
  },

  onlineStatusBadge: {
    margin: 0,
    marginLeft: 5,
    marginBottom: 3,
  },
});
