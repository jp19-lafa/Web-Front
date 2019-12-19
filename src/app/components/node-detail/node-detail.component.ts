import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IODeviceType, Node, LineGraphConfig } from 'src/app/providers/interfaces';
import { NodeDataService } from 'src/app/providers/API/node-data.service';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {

  node: Node;
  graphConfig: LineGraphConfig;
  updated: EventEmitter<LineGraphConfig> = new EventEmitter<LineGraphConfig>();

  constructor(private route: ActivatedRoute, private nodeDataService: NodeDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nodeDataService.getSpecificNode(params.id).then(node => {
        this.buildGraph(node);
        this.node = node;
        this.updated.emit(this.graphConfig);
      });
    });
  }

  buildGraph(node: Node) {
    this.graphConfig = {
      name: 'Temperatures',
      sources: [{
        device: node.sensors[0]._id,
        type: node.sensors[0].type,
        io: IODeviceType.sensor,
        color: 'green',
      },
      {
        device: node.sensors[1]._id,
        type: node.sensors[1].type,
        io: IODeviceType.sensor,
        color: 'blue',
      }],
      ticks: {
        beginAtZero: null,
        suggestedMin: 0,
        suggestedMax: null
      }
    };
  }

}
