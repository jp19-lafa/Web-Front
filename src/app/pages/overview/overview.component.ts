import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NodeDataService } from 'src/app/node-data.service';
import { Node } from 'src/app/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  controllers: string[] = ['Light Intensity', 'Waterflow', 'Nutritient Flow'];
  sensortypes: string[] = ['Air Temperature', 'Water Temperature', 'Relative Humidity'];
  nodes: Node[] = [];
  clickedNode: Node;
  dataLimit = 5;

  constructor(private nodeDataSvc: NodeDataService) {
    this.getNodes();
  }

  ngOnInit() {
  }

  getNodes() {
    this.nodeDataSvc.getAllMyNodes().then((nodes) => {
      this.nodes = nodes;
    });
  }
  selectNode(node) {
    this.clickedNode = node;
  }
}
