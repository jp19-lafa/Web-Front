import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node } from './interfaces';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {
  lightIntensityValue: number;
  airTempData: number[] = [];

  constructor(private http: HttpClient) { }

  getNodes() {
    return this.http.get<Node[]>(`${environment.api}/nodes`);
  }
}