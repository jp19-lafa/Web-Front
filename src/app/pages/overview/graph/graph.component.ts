import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { NodeDataService } from 'src/app/node-data.service';
import { Node, SensorDataPoint } from '../../..//interfaces';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input() nodeInfo: Node;
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: Chart;
  graphData: number[];
  graphTimes: Date[];
  graphName: string;

  constructor(private nodeDataSvc: NodeDataService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.context = this.chartCanvas.nativeElement.getContext('2d');
    this.getSpecificNode();
  }

  getSpecificNode() {
    this.nodeDataSvc.getSpecificNode(this.nodeInfo._id).then(clickedNode => {
      console.log('specific node', clickedNode);
      this.graphName = this.nodeInfo.sensors[0].type;
      this.getDataPoints();
    });
  }
  getDataPoints() {
    this.nodeDataSvc.getSensorDataPoints(this.nodeInfo.sensors[0]._id).then(dataPoints => {
      console.log('datapoints', dataPoints.data.map(point => point.value).reverse());
      this.graphData = dataPoints.data.map(point => point.value).reverse();
      this.graphTimes = dataPoints.data.map(point => point.timestamp = new Date()).reverse();
      this.createChart();
    });
  }

  createChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.graphTimes,
        datasets: [{
          label: this.graphName,
          fill: false,
          data: this.graphData,
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
          text: this.graphName,
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
