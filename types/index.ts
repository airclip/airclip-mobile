export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  joinedAt: number;
  createdAt: number;
  lastUpdatedAt: number;
};

export type Device = {
  deviceId: string;
  ownerId: String;
  type: DeviceType;
  name: string;
  os: string;
  registeredAt: number;
  createdAt: number;
  lastUpdatedAt: number;
};

export type DeviceType = 'desktop' | 'mobile';

export type Activity = {
  activityId: string;
  type: ActivityType;
  targetDeviceId: string;
  content: string;
  happenedAt: number;
  createdAt: number;
  lastUpdatedAt: number;
};

export type ActivityType = 'incoming' | 'outgoing';

export type Settings = {
  incomingSyncEnabled: boolean;
  outgoingSyncEnabled: boolean;
};
