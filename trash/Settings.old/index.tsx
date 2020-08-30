import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {doSomething} from '../../store/actions';
import {AppState} from '../../store';

const Foo = ({navigation}) => {
  return <Button title="Bar" onPress={() => navigation.navigate('Bar')} />;
};

const Bar = ({navigation}) => {
  return <Button title="Foo" onPress={() => navigation.navigate('Foo')} />;
};

const Baz = ({navigation}) => {
  return <Button title="Foo" onPress={() => navigation.navigate('Foo')} />;
};

const Tab = createBottomTabNavigator();

const SettingsScreen = ({route, navigation}) => {
  const [val, setVal] = useState(0);
  const counter = useSelector((state: AppState) => {
    console.log('state', state);
    return state.state1.counter;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Mounted Settings');
  }, []);

  useEffect(() => {
    return () => {
      console.log('Unmounted Settings');
    };
  }, []);

  const onPress = () => {
    dispatch(doSomething(counter + 1));
    setVal(val + 1);
  };

  return (
    <View style={[styles.container]}>
      <Tab.Navigator>
        <Tab.Screen name="Foo" component={Foo} />
        <Tab.Screen name="Bar" component={Bar} />
        <Tab.Screen
          name="Baz"
          component={Baz}
          options={{tabBarVisible: false}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default SettingsScreen;
