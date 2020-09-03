import {Action} from './types';
import {UPDATE_ACTIVITIES, UPDATE_DEVICES, UPDATE_SESSION} from './constants';
import {ActivityMap, DeviceMap, LoginSession} from '../types';
import {fetchActivities, fetchDevices} from '../datamanager';

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

export const deleteActivities = (activities: string[]) => {
  return async (dispatch) => {
    // Do some async work here.

    dispatch(updateActivities(await fetchActivities()));
  };
};

export const refreshActivities = () => {
  return async (dispatch) => {
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
  return async (dispatch) => {
    dispatch(updateDevices(await fetchDevices()));
  };
};
