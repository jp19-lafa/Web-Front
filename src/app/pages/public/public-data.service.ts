import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpZW5jZSI6ImF1ZDoqIiwiaXNzdWVyIjoiRmFybUxhYlRlYW0iLCJzdWIiOiI1ZGIyYzNkZGJiMWZjNDAwMTIwNGNhOGEiLCJpYXQiOjE1NzI4NTc0OTgsImV4cCI6MTU3Mjk0Mzg5OH0.x8pLoO4H1C-rhk3OPpuStW3BXc76xM08bphTBhVc0Ms';
  activePage: PublicNode;
  publicNodes: PublicNode[];
  ActiveNodeData: PublicNode;
  IdOfClickedFarm: string;
  apiLink = 'https://api.farmlab.team/nodes/public?limit=20';

  constructor(private http: HttpClient) { }

  getPublicData() {
    return this.http.get<PublicNode[]>(this.apiLink);
  }

  getHeaders(token: string) {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }
}

export interface Sensors {
  airtemp: SensorData,
  watertemp: SensorData,
  lightstr: SensorData,
  airhumidity: SensorData,
  waterph: SensorData,
}
export interface Actuators {
  lightint: SensorData,
  flowpump: SensorData,
  foodpump: SensorData
}
//Public api interface
export interface SensorData {
  value: number,
  history: DataPoints[]
  timestamp: Date,
}
export interface DataPoints {
  value: number;
  timestamp: Date;
}
export interface PublicNode {
  sensors: Sensors,
  actuators: Sensors,
  status: boolean,
  _id: string,
  label: string,
}