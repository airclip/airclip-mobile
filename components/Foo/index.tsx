import React from 'react';
import {Text} from 'react-native-paper';

type Props = {
  text: string;
};

const Foo = ({text}: Props) => <Text>{text}</Text>;

export default Foo;
