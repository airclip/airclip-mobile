import React from 'react';
import {Text, Avatar, Title, Divider} from 'react-native-paper';
import {View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import Ripple from 'react-native-material-ripple';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import baseStyles from '../../styles';
import {colors} from '../../styles/constants';
import NavigationItem from './NavigationItem';

const mainRoutes = [
  {
    name: 'Home',
    icon: 'home',
  },
  {
    name: 'Feedback',
    icon: 'lightbulb-on',
  },
  {
    name: 'Help',
    icon: 'help',
  },
];

const footerRoutes = [
  {
    name: 'Settings',
    icon: 'cog',
  },
];

const DrawerContent = ({
  navigation,
  state,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const currentRouteName = state.routeNames[state.index];

  return (
    <SafeAreaView style={baseStyles.container}>
      <View style={styles.drawerContent}>
        <View style={styles.profileContainer}>
          <Ripple
            rippleCentered
            rippleSize={80}
            onPress={() => navigation.navigate('UserProfile')}
            style={styles.avatarContainer}>
            <Avatar.Image
              size={45}
              source={require('../../assets/images/user.png')}
              style={styles.avatar}
            />
          </Ripple>
          <Title style={styles.name}>Sandra Adams</Title>
          <Text style={[styles.email, {color: colors.secondaryTextColor}]}>
            sandra_a88@gmail.com
          </Text>
        </View>
        <Divider />
        <View style={styles.routesList}>
          <View style={styles.mainRootList}>
            {mainRoutes.map((route) => (
              <NavigationItem
                key={route.name}
                label={route.name}
                icon={route.icon}
                isActive={route.name === currentRouteName}
                onPress={() => navigation.navigate(route.name)}
              />
            ))}
          </View>
          <Divider />
          <View style={styles.footerRootList}>
            {footerRoutes.map((route) => (
              <NavigationItem
                key={route.name}
                label={route.name}
                icon={route.icon}
                isActive={route.name === currentRouteName}
                onPress={() => navigation.navigate(route.name)}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
