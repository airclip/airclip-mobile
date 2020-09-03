import {Action} from './types';
import {
  UPDATE_ACTIVITIES,
  UPDATE_DEVICES,
  UPDATE_SESSION,
  UPDATE_SETTINGS,
} from './constants';
import {ActivityMap, DeviceMap, LoginSession, Settings} from '../types';
import {
  fetchActivities,
  fetchDevices,
  removeActivities,
  fetchSettings,
  updateSyncStatus,
  clearAllActivities,
} from '../datamanager';

export const updateSession = (session: LoginSession | null): Action => ({
  type: UPDATE_SESSION,
  payload: {
    session,
  },
});

export const updateActivities = (activities: ActivityMap): Action => ({
  type: UPDATE_ACTIVITIES,
  payload: {
    activities,
  },
});

export const deleteActivities = (activityIds: string[]) => {
  return async (dispatch: any) => {
    await removeActivities(activityIds);
    dispatch(refreshActivities());
  };
};

export const deleteAllActivities = (activityIds: string[]) => {
  return async (dispatch: any) => {
    await clearAllActivities();
    dispatch(refreshActivities());
  };
};

export const refreshActivities = () => {
  return async (dispatch: any) => {
    dispatch(updateActivities(await fetchActivities()));
  };
};

export const updateDevices = (devices: DeviceMap): Action => ({
  type: UPDATE_DEVICES,
  payload: {
    devices,
  },
});

export const refreshDevices = () => {
  return async (dispatch: any) => {
    dispatch(updateDevices(await fetchDevices()));
  };
};

export const updateSettings = (settings: Settings): Action => ({
  type: UPDATE_SETTINGS,
  payload: {
    settings,
  },
});

export const updateIncomingSync = (status: boolean) => {
  return async (dispatch: any) => {
    await updateSyncStatus('incoming', status);
    dispatch(refreshSettings());
  };
};

export const updateOutgoingSync = (status: boolean) => {
  return async (dispatch: any) => {
    await updateSyncStatus('outgoing', status);
    dispatch(refreshSettings());
  };
};

export const refreshSettings = () => {
  return async (dispatch: any) => {
    dispatch(updateSettings(await fetchSettings()));
  };
};
