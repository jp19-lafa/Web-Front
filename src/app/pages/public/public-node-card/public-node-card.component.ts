import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PublicDataService, Nodes } from '../public-data.service';

@Component({
  selector: 'app-public-node-card',
  templateUrl: './public-node-card.component.html',
  styleUrls: ['./public-node-card.component.scss']
})
export class PublicNodeCardComponent implements OnInit {
  @Input('node') node: Nodes;
  statusMsg: string;
  clickedFarm: string;
  @ViewChild('status', { static: false }) status: ElementRef;

  constructor(private publicDataSvc: PublicDataService, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.displayStatus();
  }
  ngAfterViewInit(): void {
    this.setColorOfStatusCircle();
  }
  showFarm() {
    this.publicDataSvc.activePage = this.publicDataSvc.nodes.filter(node => {
      console.log(node._id);

      return node._id === this.node._id;
    })[0];
    this.publicDataSvc.getInfo(this.node._id);
  }
  displayStatus() {
    if (this.node.status) {
      this.statusMsg = 'active';
    }
    else if (!this.node.status) {
      this.statusMsg = 'deactivated';
    };
  }
  setColorOfStatusCircle() {
    if (this.node.status == true) {
      this.renderer2.setStyle(this.status.nativeElement, 'background', 'rgba(76, 175, 80, 1);');
    }
    if (this.node.status == false) {
      this.renderer2.setStyle(this.status.nativeElement, 'background', 'rgba(255, 0, 0, 1)');
    }
  }
}
