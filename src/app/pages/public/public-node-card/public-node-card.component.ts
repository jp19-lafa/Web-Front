import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PublicDataService, Nodes } from '../public-data.service';

@Component({
  selector: 'app-public-node-card',
  templateUrl: './public-node-card.component.html',
  styleUrls: ['./public-node-card.component.scss']
})
export class PublicNodeCardComponent implements OnInit {
  @Input('node') node: Nodes;
  statusMsg: string;
  clickedFarm: string;
  values: number[];
  times: Date[];
  @ViewChild('status', { static: false }) status: ElementRef;

  constructor(private publicDataSvc: PublicDataService, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.displayStatus();
  }
  ngAfterViewInit(): void {
    this.setColorOfStatusCircle();
  }
  showFarm() {
    this.publicDataSvc.activePage = this.publicDataSvc.nodes.filter(farm => {
      return farm._id === this.node._id;
    })[0];
    this.getNodeData();
  }
  getNodeData() {
    this.publicDataSvc.getSensorsID(this.publicDataSvc.activePage._id).subscribe(sensordata => {
      this.publicDataSvc.AirTempSensorValues = sensordata.sensors.airtemp.map(val => val.value);
      this.publicDataSvc.AirTempSensorTimes = sensordata.sensors.airtemp.map(time => time.timestamp);
      this.publicDataSvc.AirHumSensorValues = sensordata.sensors.airhumidity.map(val => val.value);
      this.publicDataSvc.AirHumSensorTimes = sensordata.sensors.airhumidity.map(time => time.timestamp);
      this.publicDataSvc.WaterTempSensorValues = sensordata.sensors.watertemp.map(val => val.value);
      this.publicDataSvc.WaterTempSensorTimes = sensordata.sensors.watertemp.map(time => time.timestamp);
      this.publicDataSvc.WaterPhSensorValues = sensordata.sensors.waterph.map(val => val.value);
      this.publicDataSvc.WaterPhSensorTimes = sensordata.sensors.waterph.map(time => time.timestamp);
    });
  }
  displayStatus() {
    if (this.node.status) {
      this.statusMsg = 'Online';
    }
    else if (!this.node.status) {
      this.statusMsg = 'Offline';
    };
  }
  setColorOfStatusCircle() {
    if (this.node.status == true) {
      this.renderer2.setStyle(this.status.nativeElement, 'background', 'rgba(76, 175, 80, 1);');
    }
    if (this.node.status == false) {
      this.renderer2.setStyle(this.status.nativeElement, 'background', 'rgba(255, 0, 0, 1)');
    }
  }
}
