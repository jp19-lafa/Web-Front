import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpZW5jZSI6ImF1ZDoqIiwiaXNzdWVyIjoiRmFybUxhYlRlYW0iLCJzdWIiOiI1ZGIyYzNkZGJiMWZjNDAwMTIwNGNhOGEiLCJpYXQiOjE1NzI4NTc0OTgsImV4cCI6MTU3Mjk0Mzg5OH0.x8pLoO4H1C-rhk3OPpuStW3BXc76xM08bphTBhVc0Ms';
  nodes: Nodes[] = [
    {
      _id: '5db2c3fdbb1fc4001204ca8b',
      status: true,
      allowPublicStats: true,
      label: 'Development Node Alfa',
    }
  ]
  activePage: Nodes = this.nodes[0];
  AirTempSensorValues: Number[];
  AirTempSensorTimes: Date[];
  AirHumSensorValues: Number[];
  AirHumSensorTimes: Date[];
  LightSensorValues: Number[];
  LightSensorTimes: Date[];
  WaterTempSensorValues: Number[];
  WaterTempSensorTimes: Date[];
  WaterPhSensorValues: Number[];
  WaterPhSensorTimes: Date[];
  ActiveNodeData: Nodes;
  IdOfClickedFarm: string;
  constructor(private http: HttpClient) {
    //this.getNodeID('5dac6817b97a6629ec4ec805');
  }
  getAllNodes() {
    return this.http.get<Nodes[]>('https://api.staging.farmlab.team/nodes/', this.getHeaders(this.token));
  }
  getNodesID(id) {
    return this.http.get<Nodes>('https://api.staging.farmlab.team/nodes/' + id, this.getHeaders(this.token));
  }
  getSensorsID(id) {
    return this.http.get<Nodes>('https://api.staging.farmlab.team/nodes/' + id + '/sensors', this.getHeaders(this.token));
  }

  getHeaders(token: string) {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }
}
export interface Nodes {
  _id: string,
  label: string,
  status: boolean,
  allowPublicStats?: boolean,
  liveSince?: Date,
  sensors?: Sensors,
  actuators?: Actuators,
}
export interface Sensors {
  airtemp: SensorData[],
  watertemp: SensorData[],
  lightstr: SensorData[],
  airhumidity: SensorData[],
  waterph: SensorData[]
}
export interface SensorData {
  value: number,
  timestamp: Date,
}
export interface Actuators {
  lightint: Actuator,
  flowpump: Actuator,
  foodpump: Actuator
}
export interface Actuator {
  value: number,
  lastChange: Date
}