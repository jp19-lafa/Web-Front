import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpZW5jZSI6ImF1ZDoqIiwiaXNzdWVyIjoiRmFybUxhYlRlYW0iLCJzdWIiOiI1ZGIyYzNkZGJiMWZjNDAwMTIwNGNhOGEiLCJpYXQiOjE1NzI2Mjc0OTIsImV4cCI6MTU3MjcxMzg5Mn0.evLAj08yQNZFyIqOVnhjumsjc4f2TMvvtg0aytC9vT4';
  nodes: Nodes[] = [
    {
      _id: '5db2c3fdbb1fc4001204ca8b',
      status: true,
      allowPublicStats: true,
      label: 'Development Node Alfa',
    }
  ]
  activePage: Nodes = this.nodes[0];
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
  value: string,
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