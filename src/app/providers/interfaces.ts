export interface Node {
  status?: boolean;
  allowPublicStats?: boolean;
  members?: Member[];
  sensors?: Sensor[];
  actuators?: Actuator[];
  _id?: string;
  label?: string;
  livesince?: Date;
  pairingKey?: string;
  authorizationKey?: string;
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

export interface DataPoint {
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

// export interface LineGraphConfig {
//   data: {
//     timestamps: Date[];
//     datasets: {
//       label: string,
//       fill: boolean,
//       data: number[],
//       borderColor: string,
//       borderWidth: number
//     }[];
//   };
//   ticks: {
//     beginAtZero: boolean;
//     suggestedMin?: number;
//     suggestedMax?: number;
//   };
// }

export interface LineGraphConfig {
  name: string;
  sources: {
    device: string;
    type: string;
    io: IODeviceType;
    color: string;
  }[];
  ticks: {
    beginAtZero: boolean;
    suggestedMin: number;
    suggestedMax: number;
  };
}

export enum IODeviceType {
  sensor = 'sensor',
  actuator = 'actuator'
}
