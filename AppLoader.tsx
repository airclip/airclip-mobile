import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {Provider} from 'react-redux';
import baseStyles from './styles';
import {colors} from './styles/constants';
import App from './App';
import {configureStore} from './store';
import {AppState} from './store/types';

const AppLoaderScreen = () => {
  const [appState, setAppState] = useState<AppState | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const initialState: AppState = {
        session: {}, // @todo: Provide appropriate value.
        devices: [],
        activities: [],
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
