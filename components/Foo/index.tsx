import React from 'react';
import {Text} from 'react-native-paper';
import styles from './styles';

type Props = {
  text: string;
};

const Foo = ({text}: Props) => <Text>{text}</Text>;

export default Foo;
