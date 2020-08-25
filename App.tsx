import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {Button, StatusBar, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './store';

enableScreens();

const Stack = createStackNavigator();

const HomeScreen = () => {
  useEffect(() => {
    Icon.getImageSource('rocket', 20, 'red')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(Icon.getFontFamily());
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>
        ss
        <Icon name="rocket" size={30} color="green" />
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator headerMode="screen">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerStyle: {backgroundColor: 'red'}}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
