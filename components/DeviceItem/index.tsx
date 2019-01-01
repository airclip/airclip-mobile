import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Text,
  Surface,
  useTheme,
  IconButton,
  TouchableRipple,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Device} from '../../types';
import styles from './styles';
import {colors} from '../../styles/constants';
import {deviceOsInfo} from '../../constants';

type Props = {
  device: Device;
  onPress: (device: Device) => void;
  onDelete: (device: Device) => Promise<void>;
};

const DeviceItem = ({device, onPress, onDelete}: Props) => {
  const [deleteDialogState, setDeleteDialogState] = useState({
    loading: false,
    visible: false,
  });
  const osInfo = deviceOsInfo[device.os];
  const theme = useTheme();

  const onPressDelete = () => {
    setDeleteDialogState({loading: true, visible: true});

    onDelete(device)
      .then(() => {
        setDeleteDialogState({loading: false, visible: false});
        Snackbar.show({
          text: `The login session is cleared from ${device.name}.`,
          duration: Snackbar.LENGTH_SHORT,
        });
      })
      .catch((err) => {
        setDeleteDialogState({loading: false, visible: false});
        Snackbar.show({
          text: err.message || String(err),
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'OK',
            textColor: theme.colors.accent,
            onPress: () => Snackbar.dismiss(),
          },
        });
      });
  };

  // @todo: Update this logic.
  const isThisCurrentDevice = device.deviceId === '2';

  return (
    <Surface style={styles.contentContainer}>
      <View style={styles.contentWrapper}>
        <TouchableRipple onPress={() => onPress(device)}>
          <View style={styles.content}>
            <View style={styles.deviceIconContainer}>
              <Icon name={osInfo.icon} size={20} color={theme.colors.accent} />
            </View>
            <View style={styles.deviceInfoContainer}>
              <View style={styles.deviceNameContainer}>
                <Text style={styles.deviceName}>{device.name}</Text>
                {isThisCurrentDevice ? (
                  <Text style={styles.deviceNameCurrent}>(current)</Text>
                ) : null}
              </View>
              <Text style={styles.osName}>{osInfo.label}</Text>
            </View>
            <View>
              {!isThisCurrentDevice ? (
                <IconButton
                  icon="delete"
                  color={colors.dangerColor}
                  animated={true}
                  size={16}
                  onPress={() => {
                    setDeleteDialogState({loading: false, visible: true});
                  }}
                />
              ) : null}
            </View>
          </View>
        </TouchableRipple>
      </View>
      <Portal>
        <Dialog
          visible={deleteDialogState.visible}
          onDismiss={() =>
            setDeleteDialogState({loading: false, visible: false})
          }>
          <Dialog.Content>
            <Paragraph>
              Are you sure, you want to clear your login session from{' '}
              {device.name} ?
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() =>
                setDeleteDialogState({loading: false, visible: false})
              }>
              Cancel
            </Button>
            <Button onPress={onPressDelete} loading={deleteDialogState.loading}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Surface>
  );
};

export default DeviceItem;
