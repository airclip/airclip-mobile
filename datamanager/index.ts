import sampleActivities from './sample_activities';
import {
  DeviceMap,
  ActivityMap,
  Settings,
  LoginSession,
  SyncDirection,
} from '../types';

export const fetchLoginSession = async (): Promise<LoginSession | null> => {
  return {} as LoginSession;
};

export const fetchDevices = async () => {
  return {} as DeviceMap;
};

export const fetchActivities = async () => {
  return sampleActivities.reduce((acc, next) => {
    acc[next.activityId] = next;
    return acc;
  }, {} as ActivityMap);
};

export const clearActivities = async (_activityIds: string[]) => {};

export const clearAllActivities = async () => {};

export const fetchSettings = async (): Promise<Settings> => {
  return {incomingSyncEnabled: true, outgoingSyncEnabled: true};
};

export const updateSyncStatus = async (
  _direction: SyncDirection,
  _status: boolean,
) => {};
