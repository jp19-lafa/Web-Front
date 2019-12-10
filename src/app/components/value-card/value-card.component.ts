import { Component, Input, OnInit } from '@angular/core';
import { Sensor, IONames } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss']
})
export class ValueCardComponent implements OnInit {

  @Input() sensor: Sensor;
  sensorFullName: string;

  constructor() { }

  ngOnInit() {
    // TODO Move to API Services
    this.sensorFullName = IONames[this.sensor.type];
  }

}
