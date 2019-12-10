import { Component, OnInit, Input } from '@angular/core';
import { NodeDataService } from 'src/app/providers/API/node-data.service';
import { Actuator, IONames } from 'src/app/providers/interfaces';
import { NotificationService, NotificationType } from 'src/app/providers/API/notification.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  @Input() actuator: Actuator;
  actuatorFullName: string;

  constructor(private nodeDataSvc: NodeDataService, private notificationSvc: NotificationService) {
  }

  ngOnInit() {
    // TODO Move to API Services
    this.actuatorFullName = IONames[this.actuator.type];
  }

  updateValue(value: string) {
    this.nodeDataSvc.patchActuator(this.actuator._id, parseInt(value, 10));
    this.notificationSvc.notification.next({
      message: `Value update to ${ Math.round(parseInt(value, 10)) }`,
      type: NotificationType.success
    });
  }

  map(value: number): number {
    return value * 255 / 100;
  }
}
