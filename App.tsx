import React from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {Button, StatusBar, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';

enableScreens();

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>ss</Text>
      </View>
      <StatusBar backgroundColor="red" />
    </>

    // <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}} mode="margin">

    // </SafeAreaView>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="screen">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerStyle: {backgroundColor: 'red'}}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
