import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { NodeDataService } from 'src/app/providers/API/node-data.service';
import { LineGraphConfig, IODeviceType, IONames } from 'src/app/providers/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {

  @Input() config: LineGraphConfig;
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;

  context: CanvasRenderingContext2D;
  chart: Chart;

  dataSets: any[] = [];
  timestamps: string[] = [];

  constructor(private nodeDataSvc: NodeDataService) {

  }

  ngOnInit() {
    this.config.sources.forEach(source => {
      switch (source.io) {
        case IODeviceType.sensor:
          this.getSensorDataPoints(source);
          break;
        case IODeviceType.actuator:
        default:
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    this.context = this.chartCanvas.nativeElement.getContext('2d');
  }

  getSensorDataPoints(source: any) {
    this.nodeDataSvc.getSensorDataPoints(source.device).then(dataPoints => {
      if (this.dataSets.length === 0) {
        this.timestamps = dataPoints.data.map(point => moment(new Date(point.timestamp)).format('h:mm')).reverse()
      }

      this.dataSets.push({
        label: IONames[source.type],
        fill: false,
        data: dataPoints.data.map(point => point.value).reverse(),
        borderColor: source.color,
        borderWidth: 2,
      });

      if (this.dataSets.length === this.config.sources.length) { this.createChart(); }
    });
  }

  createChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.timestamps,
        datasets: this.dataSets
      },
      options: {
        title: {
          display: true,
          text: this.config.name,
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
