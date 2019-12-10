import { Component, OnInit, Input } from '@angular/core';
import { NodeDataService } from 'src/app/providers/API/node-data.service';
import { Actuator } from 'src/app/providers/interfaces';
import { NotificationService, NotificationType } from 'src/app/providers/API/notification.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() actuator: Actuator;
  constructor(private nodeDataSvc: NodeDataService, private notificationSvc: NotificationService) {
  }

  ngOnInit() { }

  updateValue(event) {
    const value = this.map(event.target.valueAsNumber);
    this.nodeDataSvc.patchActuator(this.actuator._id, value);
    this.notificationSvc.notification.next({
      message: `Value update to ${value}`,
      type: NotificationType.success
    });
  }

  map(value: number): number {
    const multiplier = 255 / 100;
    value = value * multiplier;
    return value;
  }
}
