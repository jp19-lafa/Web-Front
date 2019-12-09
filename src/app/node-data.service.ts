import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node, SensorDataPoint, Actuator } from './interfaces';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {

  constructor(private http: HttpClient) { }

  /**
   * Get all nodes from the logged in user
   */
  getAllMyNodes(): Promise<Node[]> {
    return this.http.get<Node[]>(`${environment.api}/nodes`).toPromise();
  }

  /**
   * Get all info from a specific node
   * @param id The Node ID
   */
  getSpecificNode(id: string): Promise<Node> {
    return this.http.get<Node>(`${environment.api}/nodes/${id}`).toPromise();
  }

  /**
   * Get all datapoints from a specific sensor
   * @param id The Sensor ID
   */
  getSensorDataPoints(id: string): Promise<{ data: SensorDataPoint[] }> {
    return this.http.get<{ data: SensorDataPoint[] }>(`${environment.api}/sensors/${id}`).toPromise();
  }

  patchActuator(id: string, value: number): Promise<{ data: Actuator }> {
    return this.http.patch<{ data: Actuator }>(`${environment.api}/actuators/${id}`, { value }).toPromise();
  }
}
