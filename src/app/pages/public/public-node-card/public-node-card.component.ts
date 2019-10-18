import { Component, OnInit, Input } from '@angular/core';
import { PublicDataService, Node } from '../public-data.service';

@Component({
  selector: 'app-public-node-card',
  templateUrl: './public-node-card.component.html',
  styleUrls: ['./public-node-card.component.scss']
})
export class PublicNodeCardComponent implements OnInit {
  @Input('node') node: Node;
  clickedFarm: string;

  constructor(private publicDataSvc: PublicDataService) { }

  ngOnInit() {
  }
  showFarm() {
    this.publicDataSvc.activePage = this.publicDataSvc.nodes.filter(node => {
      return node._id === this.node._id;
    })[0];
  }
}
