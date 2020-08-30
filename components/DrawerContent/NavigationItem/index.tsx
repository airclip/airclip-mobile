import React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import styles from './styles';
import {colors} from '../../../styles/constants';

type Props = {
  label: string;
  icon: string;
  isActive: boolean;
  onPress: () => void;
};

const NavigationItem = ({label, icon, isActive, onPress}: Props) => {
  const backgroundColor = isActive ? colors.lightPrimary : 'transparent';
  const color = isActive ? colors.primary : 'rgba(0,0,0,0.5)';

  return (
    <Ripple onPress={onPress}>
      <View style={[styles.navigationItem, {backgroundColor}]}>
        <Icon name={icon} color={color} style={styles.itemIcon} size={20} />
        <Text
          style={[
            styles.itemLabel,
            {
              color,
            },
          ]}>
          {label}
        </Text>
      </View>
    </Ripple>
  );
};

export default NavigationItem;
