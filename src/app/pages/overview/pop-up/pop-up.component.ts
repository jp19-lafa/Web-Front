import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NotificationService, Notification } from 'src/app/notification.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  public faBell = faBell;
  public notification: Notification;

  constructor(private notificationSvc: NotificationService) { }

  ngOnInit() {
    this.notificationSvc.notification.subscribe(notification => {
      this.notification = notification;
      setTimeout(() => {
        this.close();
      }, 5000);
    });
  }

  close() {
    delete this.notification;
  }
}
