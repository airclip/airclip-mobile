import {Action} from './types';
import {UPDATE_ACTIVITIES, UPDATE_DEVICES, UPDATE_SESSION} from './constants';
import {ActivityMap, DeviceMap, LoginSession} from '../types';

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

export const updateDevices = (devices: DeviceMap): Action => ({
  type: UPDATE_DEVICES,
  payload: {
    devices,
  },
});
