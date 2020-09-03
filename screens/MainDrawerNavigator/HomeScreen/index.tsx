import React from 'react';
import {View, ActionSheetIOS, Platform} from 'react-native';
import {useTheme, Colors, Title, IconButton, Menu} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './styles';
import baseStyles from '../../../styles';
import ActivitiesScreen from './ActivitiesScreen';
import DevicesScreen from './DevicesScreen';

const Tab = createMaterialTopTabNavigator();

type Props = {
  route: any;
  navigation: any;
};

const HomeScreen = ({route, navigation}: Props) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [
    visibleOptionsMenuAndroid,
    setVisibleOptionsMenuAndroid,
  ] = React.useState(false);

  const onClickHelpOption = () => {
    navigation.navigate('Help');
  };

  const onClickRateUsOption = () => {
    // Use: https://github.com/KjellConnelly/react-native-rate
    // or
    // https://github.com/pankod/react-native-store-rating
  };

  const onPressOptionsMenuIOS = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Rate Us', 'Help'],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          onClickRateUsOption();
        } else if (buttonIndex === 2) {
          onClickHelpOption();
        }
      },
    );
  };

  return (
    <View
      style={[
        styles.home,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <View
        style={[
          styles.appbar,
          {
            paddingTop: insets.top + 10,
            backgroundColor: theme.colors.primary,
          },
        ]}>
        <View style={styles.appbarTitleContainer}>
          <IconButton
            icon="menu"
            color="white"
            animated={true}
            size={20}
            onPress={() => navigation.toggleDrawer()}
          />
          <Title style={styles.appbarTitleText}>ClipSynk</Title>
        </View>
        <View style={styles.appbarActionsContainer}>
          {Platform.OS === 'ios' ? (
            <IconButton
              icon="dots-horizontal"
              color="white"
              animated={true}
              size={20}
              onPress={onPressOptionsMenuIOS}
            />
          ) : (
            <Menu
              visible={visibleOptionsMenuAndroid}
              onDismiss={() => setVisibleOptionsMenuAndroid(false)}
              anchor={
                <IconButton
                  icon="dots-vertical"
                  color="white"
                  animated={true}
                  size={20}
                  onPress={() => setVisibleOptionsMenuAndroid(true)}
                />
              }>
              <Menu.Item onPress={onClickRateUsOption} title="Rate Us" />
              <Menu.Item onPress={onClickHelpOption} title="Help" />
            </Menu>
          )}
        </View>
      </View>
      <View style={baseStyles.container}>
        <Tab.Navigator
          initialRouteName="Activities"
          tabBarOptions={{
            activeTintColor: 'rgba(255,255,255,1)',
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            style: {
              backgroundColor: theme.colors.primary,
              elevation: 4,
              shadowColor: Colors.black,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.24,
              shadowRadius: 4,
            },
            // indicatorStyle: {backgroundColor: theme.colors.primary},
            indicatorStyle: {backgroundColor: 'white'},
          }}>
          <Tab.Screen
            name="Activities"
            component={ActivitiesScreen}
            options={{
              tabBarLabel: 'History',
            }}
          />
          <Tab.Screen name="Devices" component={DevicesScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default HomeScreen;
