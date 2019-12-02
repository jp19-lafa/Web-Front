import { Component, OnInit } from '@angular/core';
import { NodeDataService } from 'src/app/node-data.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  type: string;
  constructor(private nodeDataSvc: NodeDataService) { }

  ngOnInit() {
  }

  updateValue(event) {
    this.nodeDataSvc.lightIntensityValue = event.target.value;
    console.log('Light updatet to ' + event.target.value);
  }

}
