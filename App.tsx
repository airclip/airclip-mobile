import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
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
