import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NodeDataService } from 'src/app/providers/API/node-data.service';
import { Node, LineGraphConfig, IODeviceType } from 'src/app/providers/interfaces';
import { ActivatedRoute } from '@angular/router';
import { faWindowRestore, faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public faWindowRestore = faWindowRestore;
  public faBuilding = faBuilding;
  public faCog = faCog;
  nodes: Node[] = [];
  activeNode: Node;

  graphConfig: LineGraphConfig;

  constructor(
    private nodeDataSvc: NodeDataService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getNodes();
  }

  getNodes() {
    this.nodeDataSvc.getAllMyNodes().then((nodes) => {
      this.nodes = nodes;
      if (this.route.snapshot.params.id) {
        this.selectNode(nodes.filter(node => node._id === this.route.snapshot.params.id)[0]);
      }
    });
  }

  selectNode(node) {
    this.activeNode = node;
    this.graphConfig = {
      name: 'Temperatures',
      sources: [{
        device: this.activeNode.sensors[0]._id,
        type: this.activeNode.sensors[0].type,
        io: IODeviceType.sensor,
        color: 'green',
      },
      {
        device: this.activeNode.sensors[1]._id,
        type: this.activeNode.sensors[1].type,
        io: IODeviceType.sensor,
        color: 'blue',
      }],
      ticks: {
        beginAtZero: null,
        suggestedMin: -5,
        suggestedMax: null
      }
    };
  }
}
