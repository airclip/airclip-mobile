import React, {useState} from 'react';
import {View, FlatList, BackHandler, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Text,
  useTheme,
  IconButton,
  Checkbox,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
import ActivityItem from '../../../../components/ActivityItem';
import {Activity} from '../../../../types';
import {copyToClipboard} from '../../../../clipboard';
import {AppState} from '../../../../store/types';

const ActivitiesScreen = () => {
  const activities = useSelector((state: AppState) => state.activities);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [mode, setMode] = useState<'selection' | 'normal'>('normal');
  const [contentDialogState, setContentDialogState] = useState({
    content: '',
    visible: false,
  });

  const theme = useTheme();

  const toggleSelectionItem = (id: string) => {
    const newSelectedItems = new Set(selectedItems);

    if (selectedItems.has(id)) {
      newSelectedItems.delete(id);
    } else {
      newSelectedItems.add(id);
    }

    setSelectedItems(newSelectedItems);
  };

  const onLongPressItem = (activity: Activity) => {
    if (mode === 'normal') {
      setMode('selection');
    }

    toggleSelectionItem(activity.activityId);
  };

  const onPressItem = (activity: Activity) => {
    if (mode === 'selection') {
      toggleSelectionItem(activity.activityId);
    } else {
      setContentDialogState({content: activity.content, visible: true});
    }
  };

  const onSelectAll = (selectAll: boolean) => {
    setSelectAllChecked(selectAll);

    let newSelectedItems: Set<string>;

    if (selectAll) {
      newSelectedItems = new Set(activities.map((item) => item.activityId));
    } else {
      newSelectedItems = new Set();
    }

    setSelectedItems(newSelectedItems);
  };

  const renderItem = ({item}: {item: Activity}) => {
    return (
      <ActivityItem
        activity={item}
        isSelected={selectedItems.has(item.activityId)}
        onLongPress={onLongPressItem}
        onPress={onPressItem}
      />
    );
  };

  const setToNormalMode = () => {
    setSelectAllChecked(false);
    setSelectedItems(new Set());
    setMode('normal');
  };

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        if (mode === 'selection') {
          setToNormalMode();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', backAction);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, [mode]),
  );

  const onPressBackSelectionIOS = () => {
    setToNormalMode();
  };

  const onPressCopy = () => {
    copyToClipboard(contentDialogState.content);
    Snackbar.show({
      text: 'Copied to clipboard.',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <View style={styles.contentContainer}>
      {mode === 'selection' ? (
        <View style={styles.selectionToolbox}>
          <View style={styles.selectionToolboxStatusContainer}>
            {Platform.OS === 'ios' ? (
              <View>
                <IconButton
                  icon="arrow-left"
                  color={theme.colors.accent}
                  onPress={onPressBackSelectionIOS}
                />
              </View>
            ) : null}
            <View style={styles.selectionToolboxSelectAllCheckboxContainer}>
              <Checkbox.Android
                status={selectAllChecked ? 'checked' : 'unchecked'}
                onPress={() => onSelectAll(!selectAllChecked)}
              />
              <Text>Select All</Text>
            </View>
            <View style={styles.selectionToolboxCountContainer}>
              <Text
                style={[
                  styles.selectionToolboxCountContainer,
                  {color: theme.colors.accent},
                ]}>
                {selectedItems.size}
              </Text>
              <Text>Items Selected</Text>
            </View>
          </View>
          <View style={styles.selectionToolboxActionsContainer}>
            <IconButton
              icon="delete"
              color={theme.colors.accent}
              animated={true}
              size={20}
              onPress={() => {}}
            />
          </View>
        </View>
      ) : null}
      <FlatList
        style={styles.itemsList}
        ItemSeparatorComponent={ActivityItem.Separator}
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.activityId}
        extraData={selectedItems}
      />
      <Portal>
        <Dialog
          visible={contentDialogState.visible}
          onDismiss={() =>
            setContentDialogState({content: '', visible: false})
          }>
          <Dialog.Content>
            <Paragraph>{contentDialogState.content}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button icon="content-copy" onPress={onPressCopy} mode="text">
              {null}
            </Button>
            <Button
              onPress={() =>
                setContentDialogState({content: '', visible: false})
              }>
              OK
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ActivitiesScreen;
