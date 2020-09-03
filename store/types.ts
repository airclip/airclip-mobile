import {Settings, DeviceMap, ActivityMap, LoginSession} from '../types';

export type AppState = {
  session: LoginSession | null;
  devices: DeviceMap;
  activities: ActivityMap;
  settings: Settings;
};

export type Action = {
  type: string;
  payload: any;
};
