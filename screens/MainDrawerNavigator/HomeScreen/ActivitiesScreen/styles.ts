import {StyleSheet} from 'react-native';
import baseStyles from '../../../../styles';

export default StyleSheet.create({
  contentContainer: {
    ...baseStyles.container,
    marginBottom: 10,
  },

  selectionToolbox: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectionToolboxStatusContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },

  selectionToolboxSelectAllCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectionToolboxCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  selectionToolboxCountText: {
    marginRight: 5,
    fontWeight: 'bold',
  },

  selectionToolboxActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 3,
  },

  itemsList: {
    marginTop: 10,
    flex: 1,
  },
});
