import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PublicDataService, Node } from '../public-data.service';

@Component({
  selector: 'app-public-node-card',
  templateUrl: './public-node-card.component.html',
  styleUrls: ['./public-node-card.component.scss']
})
export class PublicNodeCardComponent implements OnInit {
  @Input('node') node: Node;
  clickedFarm: string;
  @ViewChild('status', { static: false }) status: ElementRef;

  constructor(private publicDataSvc: PublicDataService, private renderer2: Renderer2) {
  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    if (this.node.status == 'Active') {
      console.log('active');
      this.renderer2.setStyle(this.status.nativeElement, 'background', 'rgba(76, 175, 80, 1);');
    }
    if (this.node.status == 'Deactivated') {
      console.log('deactive');
      this.renderer2.setStyle(this.status.nativeElement, 'background', 'rgba(255, 0, 0, 1)');
    }
  }
  showFarm() {
    this.publicDataSvc.activePage = this.publicDataSvc.nodes.filter(node => {
      return node._id === this.node._id;
    })[0];
  }
}
