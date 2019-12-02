import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Node } from 'src/app/interfaces';
import { faSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-node-list-item',
  templateUrl: './node-list-item.component.html',
  styleUrls: ['./node-list-item.component.scss']
})
export class NodeListItemComponent implements OnInit {
  @Input('node') node: Node;
  @ViewChild('status', { static: false }) status: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.setStatus();
  }

  setStatus() {
    if (this.node.status) {
      this.renderer.setStyle(this.status.nativeElement, 'background', 'rgb(85, 215, 154)');
    } else {
      this.renderer.setStyle(this.status.nativeElement, 'background', 'rgb(255, 0, 0)');
    }
  }

}
