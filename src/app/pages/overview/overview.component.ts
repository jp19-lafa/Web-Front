import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { NodeDataService } from 'src/app/node-data.service';
import { Node } from 'src/app/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {
  controllers: string[] = ['Light Intensity', 'Waterflow', 'Nutritient Flow'];
  sensortypes: string[] = ['Air Temperature', 'Water Temperature', 'Relative Humidity'];
  nodes: Node[] = [];
  clickedNode: string;
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: Chart;
  dataLimit = 5;

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
    this.nodeDataSvc.getAllMyNodes().then((nodes) => {
      this.nodes = nodes;
    });
  }
  selectNode(node) {
    console.log('clicked', node);
    this.clickedNode = node.label;
  }

  createChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: 'label',
        datasets: [{
          label: 'Temperature in °C',
          fill: false,
          data: [12, 53, 23, 13],
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
