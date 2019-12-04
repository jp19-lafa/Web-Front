import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { NodeDataService } from 'src/app/node-data.service';
import { Node, Sensor } from 'src/app/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  controllers: string[] = ['Light Intensity', 'Waterflow', 'Nutritient Flow'];
  sensortypes: string[] = ['Air Temperature', 'Water Temperature', 'Relative Humidity'];
  nodes: Node[] = [];
  clickedNode: String;
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart;
  sensorData: Sensor[];

  constructor(private nodeDataSvc: NodeDataService) {
    this.getNodes();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.context = this.chartCanvas.nativeElement.getContext('2d');
    this.createChart();
  }

  getNodes() {
    this.nodeDataSvc.getNodes().subscribe((nodes) => {
      this.nodes = nodes;
    });
  }
  selectNode(node) {
    console.log('clicked', node);
    this.clickedNode = node.label
    this.sensorData = node.sensors;
    console.log(this.sensorData);
  }

  createChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: 'label',
        datasets: [{
          label: 'Temperature in °C',
          fill: false,
          data: ['5', '10', '20', '30', '40', '30', '0'],
          backgroundColor: [
            'rgba(76, 175, 80, 1)'
          ],
          borderColor: [
            'rgba(76, 175, 80, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Air Temperature'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMin: -10,
              suggestedMax: 40,
            }
          }]
        }
      }
    });
  }

}
