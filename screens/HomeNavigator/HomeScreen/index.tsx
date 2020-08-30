import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>HomeScreen</Text>
      <View style={styles.footer}>
        <Text>HomeScreen Footer</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
