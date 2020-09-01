import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  List,
  Switch,
  useTheme,
  Divider,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
import baseStyles from '../../../styles';
import BaseSimpleScreen from '../../BaseSimpleScreen';

const SettingsScreen = () => {
  const [outgoingOn, setOutgoingOn] = useState(true);
  const [incomingOn, setIncomingOn] = useState(true);
  const [visibleClearHistoryDialog, setVisibleClearHistoryDialog] = useState(
    false,
  );

  const theme = useTheme();

  const onPressClearHistory = () => {
    setVisibleClearHistoryDialog(false);
    Snackbar.show({
      text: 'History cleared',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <BaseSimpleScreen title="Settings">
      <View style={baseStyles.container}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <List.Section>
              <List.Subheader style={{color: theme.colors.accent}}>
                Clipboard Syncing
              </List.Subheader>
              <List.Item
                title="Outgoing"
                right={() => (
                  <Switch
                    value={outgoingOn}
                    onValueChange={(value) => setOutgoingOn(value)}
                  />
                )}
                description="Disables clipboard syncing to other devices"
              />
              <List.Item
                title="Incoming"
                right={() => (
                  <Switch
                    value={incomingOn}
                    onValueChange={(value) => setIncomingOn(value)}
                  />
                )}
                description="Disables clipboard syncing from other devices"
              />
            </List.Section>
            <Divider />
            <List.Section>
              <List.Subheader style={{color: theme.colors.accent}}>
                History
              </List.Subheader>
              <List.Item
                title="Clear Clipboard History"
                onPress={() => setVisibleClearHistoryDialog(true)}
                description="Tap to clear all the clipboard history stored in this device"
              />
            </List.Section>
          </View>
        </ScrollView>
        <Portal>
          <Dialog
            visible={visibleClearHistoryDialog}
            onDismiss={() => setVisibleClearHistoryDialog(false)}>
            <Dialog.Content>
              <Paragraph>
                Are you sure to clear all the clipboard histories synced with
                other devices?
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisibleClearHistoryDialog(false)}>
                Cancel
              </Button>
              <Button onPress={onPressClearHistory}>Clear</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </BaseSimpleScreen>
  );
};

export default SettingsScreen;
