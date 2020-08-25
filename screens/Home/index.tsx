import React, {useState, useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {doSomething} from '../../store/actions';
import {AppState} from '../../store';

const HomeScreen = ({route, navigation}) => {
  console.log('Home renders');
  const [val, setVal] = useState(0);
  const counter = useSelector((state: AppState) => {
    console.log('state', state);
    return state.state1.counter;
  });
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Button onPress={() => setCount((c) => c + 1)} title="Hey1" />
          <View style={{width: 10}} />
          <Button onPress={() => setCount((c) => c + 1)} title="Hey2" />
        </View>
      ),
    });
  }, [navigation, count]);

  console.log(route.params);

  const onPress = () => {
    dispatch(doSomething(counter + 1));
    setVal(val + 1);
  };

  const onPress2 = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Text>{val}</Text>
      <Button onPress={onPress} title="Click" />
      <Button onPress={onPress2} title="Settings" />
      <Button
        onPress={() => navigation.push('Settings')}
        title="Push Settings"
      />
    </View>
  );
};

export default HomeScreen;
