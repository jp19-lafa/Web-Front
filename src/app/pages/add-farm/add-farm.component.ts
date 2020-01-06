import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NewNode, Node } from 'src/app/providers/interfaces';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NodeDataService } from 'src/app/providers/API/node-data.service';
import { NotificationService, NotificationType } from 'src/app/providers/API/notification.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.scss']
})
export class AddFarmComponent implements OnInit {
  newNode: NewNode;
  @ViewChild('label', { static: false }) label: ElementRef;
  @ViewChild('macAddress', { static: false }) macAddress: ElementRef;
  allowPublicData = false;

  newNodeForm: FormGroup;
  node: Node;

  constructor(private formBuilder: FormBuilder, private nodeDataSvc: NodeDataService, private notificationSvc: NotificationService) {
  }

  ngOnInit() {
    this.newNodeForm = this.formBuilder.group({
      label: ['', Validators.min(3)],
      macAddress: ['', Validators.pattern('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')]
    });
  }
  togglePublic() {
    this.allowPublicData = !this.allowPublicData;
  }
  setNewNodeData() {
    this.newNode = {
      label: this.label.nativeElement.value,
      macAddress: this.macAddress.nativeElement.value,
      allowPublicStats: this.allowPublicData
    };
  }

  onSubmit(node: FormGroup) {
    if (node.valid) {
      this.setNewNodeData();
      this.nodeDataSvc.postNode(this.newNode).subscribe(createdNode => {
        this.node = createdNode;
      });
    } else if (node.invalid) {
      this.notificationSvc.notification.next({
        message: 'Invalid input',
        type: NotificationType.info
      }
      );
    }
  }

}
