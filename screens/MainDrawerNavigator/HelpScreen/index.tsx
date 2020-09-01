import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import BaseSimpleScreen from '../../BaseSimpleScreen';

const HelpScreen = () => {
  return (
    <BaseSimpleScreen title="HelpScreen">
      <ScrollView>
        <View>
          <Text>HelpScreen</Text>
        </View>
      </ScrollView>
    </BaseSimpleScreen>
  );
};

export default HelpScreen;
