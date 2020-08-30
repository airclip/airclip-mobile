import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AppState} from './store/types';
import {colors} from './styles/constants';
import baseStyles from './styles';
import AuthNavigator from './screens/AuthNavigator';
import HomeNavigator from './screens/HomeNavigator';

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

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.root}>
            {!session ? <AuthNavigator /> : <HomeNavigator />}
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
