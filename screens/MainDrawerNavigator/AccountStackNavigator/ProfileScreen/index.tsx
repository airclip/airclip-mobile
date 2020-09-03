import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Avatar, Divider, Title, List} from 'react-native-paper';
import styles from './styles';
import {colors} from '../../../../styles/constants';
import BaseSimpleScreen from '../../../BaseSimpleScreen';

type Props = {
  route: any;
  navigation: any;
};

const ProfileScreen = ({route, navigation}: Props) => {
  const onPressChangePassword = () => {
    // Show a modal with password TextInput.
  };

  const onPressLogout = () => {
    // Show a confirmation modal and logout.
    // Also, show a warning dialog that It will clear all your clipboard history for this device. [NEED TO THINK WHETHER TO DELETE HISTORY OR NOT.]
  };

  return (
    <BaseSimpleScreen title="My Account">
      <View style={styles.content}>
        <View style={styles.profileBrief}>
          <Avatar.Image
            size={60}
            source={require('../../../../assets/images/user.png')}
            style={styles.avatar}
          />
          <Title style={styles.name}>Rousan Ali</Title>
          <Text style={[styles.email, {color: colors.secondaryTextColor}]}>
            rousanali786@gmail.com
          </Text>
        </View>
        <Divider />
        <View style={styles.settingsListContainer}>
          <ScrollView>
            <List.Item
              title="Update Account Details"
              description="Change your name, email etc"
              onPress={() => navigation.navigate('UpdateProfile')}
              left={(props) => <List.Icon {...props} icon="update" />}
            />
            <List.Item
              title="Change Password"
              description="Change your account password"
              onPress={onPressChangePassword}
              left={(props) => <List.Icon {...props} icon="lock-reset" />}
            />
            <List.Item
              title="Logout"
              description="Clears your login session from this device"
              onPress={onPressLogout}
              left={(props) => <List.Icon {...props} icon="lock" />}
            />
          </ScrollView>
        </View>
      </View>
    </BaseSimpleScreen>
  );
};

export default ProfileScreen;
