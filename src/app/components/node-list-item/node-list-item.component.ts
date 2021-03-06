import { Component, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Node } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-node-list-item',
  templateUrl: './node-list-item.component.html',
  styleUrls: ['./node-list-item.component.scss']
})
export class NodeListItemComponent implements AfterViewInit {
  @Input() node: Node;
  @ViewChild('status', { static: false }) status: ElementRef;
  nodeAirTemperature: number;
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.setStatus();
    this.nodeAirTemperature = this.node.sensors.filter(sensors => sensors.type === 'airtemp')[0].value;
  }

  setStatus() {
    if (this.node.status) {
      this.renderer.setStyle(this.status.nativeElement, 'background', 'rgb(85, 215, 154)');
    } else {
      this.renderer.setStyle(this.status.nativeElement, 'background', 'rgb(255, 0, 0)');
    }
  }

}
