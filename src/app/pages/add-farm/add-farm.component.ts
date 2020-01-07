import { Component, OnInit } from '@angular/core';
import { Node } from 'src/app/providers/interfaces';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NodeDataService } from 'src/app/providers/api/node-data.service';
import { NotificationService, NotificationType } from 'src/app/providers/api/notification.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.scss']
})
export class AddFarmComponent implements OnInit {

  newNodeForm: FormGroup;
  node: Node;

  constructor(private formBuilder: FormBuilder, private nodeDataSvc: NodeDataService, private notificationSvc: NotificationService) {
  }

  ngOnInit() {
    this.newNodeForm = this.formBuilder.group({
      macAddress: ['', Validators.pattern('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('submit');
    if (form.valid) {
      this.nodeDataSvc.postNode(this.newNodeForm.value).then(node => {
        this.node = node;
      });
    } else {
      this.notificationSvc.notification.next({
        message: 'Invalid input',
        type: NotificationType.info
      });
    }
  }

}
