import React from 'react';
import {View} from 'react-native';
import {
  Text,
  Divider,
  useTheme,
  TouchableRipple,
  IconButton,
} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import styles from './styles';
import {Activity} from '../../types';
import {copyToClipboard} from '../../clipboard';

type Props = {
  activity: Activity;
  isSelected: boolean;
  onLongPress: (activity: Activity) => void;
  onPress: (activity: Activity) => void;
};

const ActivityItem = ({activity, isSelected, onLongPress, onPress}: Props) => {
  const backgroundColor = isSelected ? 'rgba(0,0,0,0.04)' : 'transparent';
  const activityTypeIcon =
    activity.type === 'incoming' ? 'arrow-bottom-left' : 'arrow-top-right';

  const theme = useTheme();

  const onPressCopy = () => {
    copyToClipboard(activity.content);
    Snackbar.show({
      text: 'Copied to the Clipboard.',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <TouchableRipple
      onLongPress={() => onLongPress(activity)}
      onPress={() => onPress(activity)}>
      <View style={[styles.content, {backgroundColor}]}>
        <View style={styles.icon}>
          {isSelected ? (
            <Icon name="check" color={theme.colors.accent} size={18} />
          ) : (
            <Icon name={activityTypeIcon} color="rgba(0,0,0,0.4)" size={18} />
          )}
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.deviceName}>OnePlus</Text>
          <Text
            style={styles.contentText}
            numberOfLines={2}
            ellipsizeMode="tail">
            {activity.content}
          </Text>
        </View>
        <View style={styles.actionsContainer}>
          <Text style={styles.time}>
            {moment(activity.happenedAt).fromNow()}
          </Text>
          {!isSelected ? (
            <IconButton
              style={styles.copyButton}
              icon="content-copy"
              color={theme.colors.accent}
              size={15}
              onPress={onPressCopy}
            />
          ) : null}
        </View>
      </View>
    </TouchableRipple>
  );
};

const Separator = () => {
  return (
    <View style={styles.separator}>
      <Divider />
    </View>
  );
};

ActivityItem.Separator = Separator;

export default ActivityItem;
