import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {Provider} from 'react-redux';
import baseStyles from './styles';
import {colors} from './styles/constants';
import App from './App';
import {configureStore} from './store';
import {AppState} from './store/types';
import {
  fetchLoginSession,
  fetchDevices,
  fetchActivities,
  fetchSettings,
} from './datamanager';

const AppLoaderScreen = () => {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchInitialState = async () => {
      const initialState: AppState = {
        session: await fetchLoginSession(),
        devices: await fetchDevices(),
        activities: await fetchActivities(),
        settings: await fetchSettings(),
        devicesStatus: {}, // It will be updated asynchronously.
      };

      return initialState;
    };

    fetchInitialState()
      .then((initialState) => {
        setAppState(initialState);
      })
      .catch((err) => {
        setError(new Error(err.message || String(err)));
      });
  }, []);

  return !error && appState ? (
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
      {error ? (
        <View>
          <Text>{error?.message}</Text>
        </View>
      ) : null}
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
