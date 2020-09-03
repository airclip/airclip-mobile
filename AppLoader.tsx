import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {Provider} from 'react-redux';
import baseStyles from './styles';
import {colors} from './styles/constants';
import App from './App';
import {configureStore} from './store';
import {AppState} from './store/types';
import {Activity} from './types';

// Fetch it from database with "happenedAt" order.
const activities: Activity[] = [
  {
    activityId: '1',
    type: 'incoming',
    targetDeviceId: '2',
    content: "Hey, What's up?",
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '2',
    type: 'outgoing',
    targetDeviceId: '1',
    content: 'https://callstack.github.io/react-native-paper/text-input.html',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '3',
    type: 'incoming',
    targetDeviceId: '1',
    content: 'https://source.android.com/setup/start/build-numbers',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '4',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '5',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '6',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '7',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '8',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '9',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '10',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '11',
    type: 'incoming',
    targetDeviceId: '1',
    content:
      'Platform codenames, versions, API levels, and NDK releases. The codenames correspond to the following version numbers, API levels, and NDK releases.',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    activityId: '12',
    type: 'incoming',
    targetDeviceId: '1',
    content: 'heyyyyyyy',
    happenedAt: Date.now(),
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
];

const AppLoaderScreen = () => {
  const [appState, setAppState] = useState<AppState | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const initialState: AppState = {
        session: {}, // @todo: Provide appropriate value.
        devices: [],
        activities: activities,
        settings: {
          incomingSyncEnabled: true,
          outgoingSyncEnabled: true,
        },
      };
      setAppState(initialState);
    }, 0);
  }, []);

  return appState ? (
    <Provider store={configureStore(appState)}>
      <App />
    </Provider>
  ) : (
    <View style={styles.appLoaderScreen}>
      <StatusBar
        backgroundColor={colors.bodyBackgroundColor}
        barStyle="dark-content"
      />
      <View style={styles.loaderContainer}>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appLoaderScreen: {
    ...baseStyles.centeredContainer,
    backgroundColor: colors.bodyBackgroundColor,
  },

  loaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginBottom: 0,
    width: 50,
    height: 50,
  },
});

export default AppLoaderScreen;
