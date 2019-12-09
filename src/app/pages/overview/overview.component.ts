import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NodeDataService } from 'src/app/node-data.service';
import { Node } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  controllers: string[] = ['Light Intensity', 'Waterflow', 'Nutritient Flow'];
  nodes: Node[] = [];
  activeNode: Node;

  constructor(private nodeDataSvc: NodeDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getNodes();
  }

  getNodes() {
    this.nodeDataSvc.getAllMyNodes().then((nodes) => {
      this.nodes = nodes;
      if (this.route.snapshot.params.id) {
        this.activeNode = nodes.filter(node => node._id === this.route.snapshot.params.id)[0];
      }
    });
  }

  selectNode(node) {
    this.activeNode = node;
  }
}
