import React from 'react';
import {Text, Avatar, Title, Divider} from 'react-native-paper';
import {View, ScrollView} from 'react-native';
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

type RouteInfo = {
  name: string;
  label?: string;
  icon: string;
};

const mainRoutes: RouteInfo[] = [
  {
    name: 'Home',
    icon: 'home',
  },
  {
    name: 'Account',
    label: 'My Account',
    icon: 'account',
  },
  {
    name: 'Settings',
    icon: 'cog',
  },
];

const footerRoutes: RouteInfo[] = [
  {
    name: 'Feedback',
    label: 'Feedback & Suggestions',
    icon: 'lightbulb-on',
  },
  {
    name: 'Help',
    label: 'Help & Support',
    icon: 'help',
  },
];

const DrawerContent = ({
  navigation,
  state,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const currentRouteName = state.routeNames[state.index];

  const onPressRateUs = () => {
    // @todo: Add logic here,
  };

  return (
    <SafeAreaView style={baseStyles.container}>
      <View style={styles.drawerContent}>
        <View style={styles.profileContainer}>
          <Ripple
            rippleCentered
            rippleSize={80}
            onPress={() => navigation.navigate('Account')}
            style={styles.avatarContainer}>
            <Avatar.Image
              size={45}
              source={require('../../assets/images/user.png')}
              style={styles.avatar}
            />
          </Ripple>
          <Title style={styles.name}>Rousan Ali</Title>
          <Text style={[styles.email, {color: colors.secondaryTextColor}]}>
            rousanali786@gmail.com
          </Text>
        </View>
        <Divider />
        <View style={styles.routesList}>
          <View style={styles.mainRootList}>
            <ScrollView>
              {mainRoutes.map((route) => (
                <NavigationItem
                  key={route.name}
                  label={route.label || route.name}
                  icon={route.icon}
                  isActive={route.name === currentRouteName}
                  onPress={() => navigation.navigate(route.name)}
                />
              ))}
            </ScrollView>
          </View>
          <Divider />
          <View style={styles.footerRootList}>
            {footerRoutes.map((route) => (
              <NavigationItem
                key={route.name}
                label={route.label || route.name}
                icon={route.icon}
                isActive={route.name === currentRouteName}
                onPress={() => navigation.navigate(route.name)}
              />
            ))}
            <NavigationItem
              key="Rate Us"
              label="Rate Us"
              icon="star"
              isActive={false}
              onPress={onPressRateUs}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
