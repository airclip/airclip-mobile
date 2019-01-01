import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import {AppState} from '../../../../store/types';
import DeviceItem from '../../../../components/DeviceItem';
import {Device} from '../../../../types';

const DevicesScreen = () => {
  const devices = useSelector((state: AppState) => state.devices);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    console.log('onRefresh');
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  const onPressItem = (device: Device) => {
    console.log(device);
  };

  const onDeleteDevice = async (device: Device) => {
    console.log('deleted device:', device);
  };

  const renderItem = ({item}: {item: Device}) => {
    return (
      <DeviceItem
        device={item}
        onPress={onPressItem}
        onDelete={onDeleteDevice}
      />
    );
  };

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={Object.values(devices)}
        renderItem={renderItem}
        keyExtractor={(item) => item.deviceId}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

export default DevicesScreen;
