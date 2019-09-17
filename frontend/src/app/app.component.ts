import { Component } from '@angular/core';
import { NotificationService } from 'src/services/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  notification: string;
  showNotification: boolean;

  constructor(
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.notificationService
            .notification$
            .subscribe(message => { 
              this.notification = message;
              this.showNotification = true;
            });
  }
}
