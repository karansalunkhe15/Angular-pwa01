import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';

  constructor(private notificationService: NotificationService) {}
  
  requestPermission() {
    this.notificationService.requestPermission();
  }

  showNotification() {
    this.notificationService.showNotification('Hello', {
      body: 'This is a notification from your Angular app'
    });
  }

}
