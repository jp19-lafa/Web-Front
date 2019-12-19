import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NodeDataService } from 'src/app/providers/API/node-data.service';
import { Node, LineGraphConfig, IODeviceType } from 'src/app/providers/interfaces';
import { ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  nodes: Node[] = [];
  isBaseRoute: boolean;

  constructor(private nodeDataService: NodeDataService) {
  }

  ngOnInit() {
    this.getNodes();
  }

  getNodes() {
    this.nodeDataService.getAllMyNodes().then((nodes) => {
      this.nodes = nodes;
    });
  }
}
