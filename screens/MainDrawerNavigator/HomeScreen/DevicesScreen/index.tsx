import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import {AppState} from '../../../../store/types';
import DeviceItem from '../../../../components/DeviceItem';
import {Device} from '../../../../types';

const DevicesScreen = () => {
  const devices = useSelector((state: AppState) => state.devices);
  const devicesStatus = useSelector((state: AppState) => state.devicesStatus);
  const [refreshing, setRefreshing] = useState(false);

  // 1. Pull devices list from server and update local database and update redux state.
  // 2. Pull devices status from server and update redux state.
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
        status={devicesStatus[item.deviceId]}
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
        extraData={devicesStatus}
      />
    </View>
  );
};

export default DevicesScreen;
