import {User, Device, Activity, Settings} from '../types';

export type AppState = {
  session: LoginSession | null;
  devices: Device[];
  activities: Activity[];
  settings: Settings;
};

export type LoginSession = {
  token: string;
  user: User;
  device: Device;
};

export type Action = {
  type: string;
  payload: any;
};
