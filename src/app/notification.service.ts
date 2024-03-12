import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  requestPermission() {
    if (!('Notification' in window)) {
      console.warn('Notifications are not supported in this browser');
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission !== 'granted') {
        console.warn('Notification permission denied by user');
      }
    });
  }

  showNotification(title: string, options?: NotificationOptions) {
    if (!('Notification' in window)) {
      console.warn('Notifications are not supported in this browser');
      return;
    }

    if (Notification.permission !== 'granted') {
      console.warn('Notification permission has not been granted');
      return;
    }

    const notification = new Notification(title, options);
  }
}
