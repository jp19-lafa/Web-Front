import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpZW5jZSI6ImF1ZDoqIiwiaXNzdWVyIjoiRmFybUxhYlRlYW0iLCJzdWIiOiI1ZGIyYzNkZGJiMWZjNDAwMTIwNGNhOGEiLCJpYXQiOjE1NzE5OTY5NzIsImV4cCI6MTU3MjA4MzM3Mn0.hscNBknCYgJ07hqYD5qjb9SqW9Pmkd0f9mOuaBDu2sU';
  nodes: Nodes[] = [
    {
      _id: '5dac6817b97a6629ec4ec805',
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
  getNodeID(id): any {
    console.log('getNodeID() called');
    this.getNodeID(id).subscribe((nodeinfo) => {
      console.log(nodeinfo);
    });
  }
  getInfo(id) {
    console.log('getInfo()');
    this.getNodeID(id);
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
  airtemp: [],
  watertemp: [],
  lightstr: [],
  airhumidity: [],
  waterph: []
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