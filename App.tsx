import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {StatusBar, View, Platform, ActionSheetIOS} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  useTheme,
  DefaultTheme,
  ActivityIndicator,
  Appbar,
  Colors,
  Text,
  Title,
  Menu,
  Divider,
  Button,
  Checkbox,
  Chip,
  Paragraph,
  Dialog,
  Portal,
  ProgressBar,
  RadioButton,
  Snackbar,
  Surface,
  Switch,
  TextInput,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './store';

enableScreens();

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Foo = () => {
  const [checked, setChecked] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setProgress((p) => p + 2);
  //   }, 1000);
  // });

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View
      style={{
        flexDirection: 'column',
        // padding: 20,
        backgroundColor: '#f8f9fa',
        flex: 1,
      }}>
      {/* <Button onPress={() => {}} mode="outlined">
        Click me
      </Button>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        style={{selfAlign: 'flex-start'}}
      />
      <Chip icon="information" onPress={() => console.log('Pressed')}>
        Example Chip
      </Chip>
      <Surface
        style={{
          padding: 8,
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
          margin: 10,
        }}>
        <Text>Surface</Text>
        <Switch value={true} onValueChange={() => {}} />
      </Surface> */}
      <View style={{padding: 30}}>
        <TextInput
          mode="outlined"
          label="Email"
          style={{height: 40}}
          // value=
          onChangeText={(text) => {}}
        />
      </View>
      <ActivityIndicator animating={true} />
      {/* <Snackbar
        visible={true}
        onDismiss={() => {}}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar> */}
      <View style={{flexDirection: 'column'}}>
        <Text>Apple</Text>
        <Divider />
        <Text>Orange</Text>
        <Divider />
      </View>
      <RadioButton.Android value="first" status={true} onPress={() => {}} />
      <ProgressBar progress={progress / 100} />
      <Button onPress={showDialog}>Show Dialog</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const Bar = () => {
  return <Text>Bar</Text>;
};

const HomeScreen = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onPressIOS = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Settings', 'Feedback', 'Donate', 'Cancel'],
        // destructiveButtonIndex: 2,
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          // setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          // setResult('🔮');
        }
      },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.accent}
      />
      <View>
        <Appbar.Header
          statusBarHeight={insets.top}
          style={{elevation: 0, shadowOpacity: 0}}>
          {/* <Appbar.BackAction /> */}
          <Appbar.Content
            title={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="menu"
                  size={17}
                  color={Colors.white}
                  style={{marginRight: 3}}
                />
                <Title style={{color: Colors.white}}>ClipSync</Title>
              </View>
            }
          />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          {Platform.OS === 'ios' ? (
            <Appbar.Action icon={MORE_ICON} onPress={onPressIOS} />
          ) : (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action
                  icon={MORE_ICON}
                  onPress={openMenu}
                  theme={theme}
                  color="white"
                />
              }>
              <Menu.Item onPress={() => {}} title="Settings" />
              <Menu.Item onPress={() => {}} title="Feedback" />
              <Menu.Item onPress={() => {}} title="Donate" />
            </Menu>
          )}
        </Appbar.Header>
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator
          // tabBar={() => {
          //   return (
          //     <View
          //       style={{
          //         backgroundColor: theme.colors.primary,
          //         elevation: 4,
          //         shadowColor: Colors.black,
          //         shadowOffset: {
          //           width: 0,
          //           height: 3,
          //         },
          //         shadowOpacity: 0.24,
          //         shadowRadius: 4,
          //         marginBottom: 10,
          //       }}>
          //       <Text>ss</Text>
          //     </View>
          //   );
          // }}
          tabBarOptions={{
            activeTintColor: Colors.white,
            inactiveTintColor: theme.colors.disabled,
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
            indicatorStyle: {backgroundColor: theme.colors.primary},
          }}>
          <Tab.Screen name="Foo" component={Foo} />
          <Tab.Screen name="Bar" component={Bar} />
        </Tab.Navigator>
      </View>
    </View>

    // <SafeAreaView
    //   style={{flex: 1, backgroundColor: theme.colors.primary}}
    //   edges={['left', 'right', 'top']}>
    //   <StatusBar
    //     barStyle="light-content"
    //     backgroundColor={theme.colors.accent}
    //   />
    //   <View style={{flex: 1, backgroundColor: Colors.white}}>
    //     <Appbar.Header>
    //       {/* <Appbar.BackAction /> */}
    //       <Appbar.Content title="Title" subtitle="Subtitle" />
    //       <Appbar.Action icon="magnify" />
    //       <Appbar.Action icon={MORE_ICON} />
    //     </Appbar.Header>
    //     <Text>
    //       lgjldfsjlgfsdlkj
    //       <Icon name="rocket" size={30} color="green" />
    //     </Text>
    //   </View>
    // </SafeAreaView>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#651fff',
    primary: '#0099ff',
    accent: '#0099ff',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator headerMode="none">
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
