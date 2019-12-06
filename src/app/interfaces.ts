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
