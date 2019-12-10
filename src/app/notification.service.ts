import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification: Subject<Notification> = new Subject<Notification>();

  constructor() { }
}
export enum NotificationType {
  success,
  info,
  error,
}

export interface Notification {
  type: NotificationType;
  message: string;
}