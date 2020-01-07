import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node, DataPoint, Actuator, Member } from '../interfaces';
import { environment } from '../../../environments/environment';

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
  getSensorDataPoints(id: string, limit: number = 20): Promise<{ data: DataPoint[] }> {
    return this.http.get<{ data: DataPoint[] }>(`${environment.api}/sensors/${id}?limit=${limit}`).toPromise();
  }
  /**
   * Get all datapoints from a specific actuator
   * @param device The sensor with its data
   */
  getActuatorDataPoints(device: any): Promise<{ data: DataPoint[] }> {
    throw new Error('Method not implemented.');
  }
  /**
   * The value of the actuator will be updated
   * @param id The actuator ID
   * @param value The slider value = new actuator value
   */
  patchActuator(id: string, value: number): Promise<{ data: Actuator }> {
    return this.http.patch<{ data: Actuator }>(`${environment.api}/actuators/${id}`, { value }).toPromise();
  }
  /**
   * Info to create a new node
   * @param node The new node that will be created
   */
  postNode(node: Node): Promise<Node> {
    return this.http.post<Node>(`${environment.api}/nodes`, node).toPromise();
  }

  /**
   * Get all users
   */
  getAllsUsersFromAdmin() {
    return this.http.get<Member[]>(`${environment.api}/users`);
  }
}
