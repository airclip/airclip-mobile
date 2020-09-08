import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Platform} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BackgroundFetch from 'react-native-background-fetch';
import {AppState} from './store/types';
import {colors} from './styles/constants';
import baseStyles from './styles';
import AuthStackNavigator from './screens/AuthStackNavigator';
import MainDrawerNavigator from './screens/MainDrawerNavigator';
import {fetchDevicesStatus} from './datamanager';
import {updateDevicesStatus} from './store/actions';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
  },
};

let val = 0;

const App = () => {
  const session = useSelector((state: AppState) => state.session);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDevicesStatus()
      .then((devicesStatus) => {
        dispatch(updateDevicesStatus(devicesStatus));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);

  useEffect(() => {
    // BackgroundTimer.runBackgroundTimer(() => {
    //   val += 1;
    //   console.log('xxxxxxxxxx: ', Platform.OS, val);
    // }, 3000);

    // setInterval(() => {
    //   val += 1;
    //   console.log('yyyyyyyyyyyy: ', Platform.OS, val);
    // }, 1000);
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // <-- minutes (15 is minimum allowed)
        // Android options
        forceAlarmManager: false, // <-- Set true to bypass JobScheduler.
        stopOnTerminate: false,
        startOnBoot: true,
        requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
        requiresCharging: false, // Default
        requiresDeviceIdle: false, // Default
        requiresBatteryNotLow: false, // Default
        requiresStorageNotLow: false, // Default
      },
      async (taskId) => {
        console.log(
          '[js] Received background-fetch event: ',
          taskId,
          Platform.OS,
        );
        // Required: Signal completion of your task to native code
        // If you fail to do this, the OS can terminate your app
        // or assign battery-blame for consuming too much background-time
        BackgroundFetch.finish(taskId);
      },
      (error) => {
        console.log('[js] RNBackgroundFetch failed to start', Platform.OS);
      },
    );

    // Optional: Query the authorization status.
    BackgroundFetch.status((status) => {
      switch (status) {
        case BackgroundFetch.STATUS_RESTRICTED:
          console.log('BackgroundFetch restricted');
          break;
        case BackgroundFetch.STATUS_DENIED:
          console.log('BackgroundFetch denied');
          break;
        case BackgroundFetch.STATUS_AVAILABLE:
          console.log('BackgroundFetch is enabled');
          break;
      }
    });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.root}>
            {!session ? <AuthStackNavigator /> : <MainDrawerNavigator />}
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    ...baseStyles.container,
    backgroundColor: colors.bodyBackgroundColor,
  },
});

export default App;
