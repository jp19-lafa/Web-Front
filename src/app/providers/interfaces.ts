export interface Node {
  status: boolean;
  allowPublicStats: boolean;
  members: Member[];
  sensors: Sensor[];
  actuators: Actuator[];
  _id: string;
  label: string;
  livesince: Date;
}

export interface Member {
  _id: string;
  firstname: string;
  lastname: string;
}
export interface Sensor {
  value: number;
  type: string;
  _id: string;
  timestamp: Date;
}
export interface Actuator {
  value: number;
  type: string;
  _id: string;
  timestamp: Date;
}

export interface SensorDataPoint {
  parent: string;
  value: number;
  timestamp: Date;
}

export enum IONames {
  airtemp = 'Air Temperature',
  watertemp = 'Water Temperature',
  lightstr = 'Light Strength',
  airhumidity = 'Air Humidity',
  waterph = 'Water PH',
  lightint = 'Light Intensity',
  flowpump = 'Flow Rate',
  foodpump = 'Nutrition Rate'
}
