import { Component, OnInit, Input } from '@angular/core';
import { NodeDataService } from 'src/app/node-data.service';
import { Actuator } from 'src/app/interfaces';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() actuator: Actuator;
  constructor(private nodeDataSvc: NodeDataService) {
  }

  ngOnInit() { }

  updateValue(event) {
    this.nodeDataSvc.patchActuator(this.actuator._id, this.map(event.target.valueAsNumber));
  }

  map(value: number): number {
    const multiplier = 255 / 100;
    value = value * multiplier;
    return value;
  }
}
