import {Action, LoginSession} from './types';
import {UPDATE_ACTIVITIES, UPDATE_DEVICES, UPDATE_SESSION} from './constants';
import {Activity, Device} from '../types';

export const updateSession = (session: LoginSession | null): Action => ({
  type: UPDATE_SESSION,
  payload: {
    session,
  },
});

export const updateActivities = (activities: Activity[]): Action => ({
  type: UPDATE_ACTIVITIES,
  payload: {
    activities,
  },
});

export const updateDevices = (devices: Device[]): Action => ({
  type: UPDATE_DEVICES,
  payload: {
    devices,
  },
});
