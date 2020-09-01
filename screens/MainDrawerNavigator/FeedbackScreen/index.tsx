import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import BaseSimpleScreen from '../../BaseSimpleScreen';

const FeedbackScreen = () => {
  return (
    <BaseSimpleScreen title="FeedbackScreen">
      <ScrollView>
        <View>
          <Text>FeedbackScreen</Text>
        </View>
      </ScrollView>
    </BaseSimpleScreen>
  );
};

export default FeedbackScreen;
