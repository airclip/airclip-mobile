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
  ownerId: String;
  fromDeviceId: string;
  toDeviceId: string;
  happenedAt: number;
  createdAt: number;
  lastUpdatedAt: number;
};
