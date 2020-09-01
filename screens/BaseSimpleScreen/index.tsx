import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import baseStyles from '../../styles';

type Props = {
  title: string;
  children: JSX.Element;
};

const BaseSimpleScreen = ({title, children}: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        baseStyles.container,
        {
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
      ]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={title} />
      </Appbar.Header>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default BaseSimpleScreen;
