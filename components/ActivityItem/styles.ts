import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  icon: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  deviceName: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500',
  },

  contentText: {
    color: 'rgba(0,0,0,0.6)',
  },

  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
  },

  time: {
    fontSize: 9,
    color: 'rgba(0,0,0,0.6)',
    fontWeight: '300',
    marginBottom: 10,
  },

  copyButton: {
    margin: 0,
  },

  separator: {
    marginLeft: 47,
    marginRight: 15,
  },
});
