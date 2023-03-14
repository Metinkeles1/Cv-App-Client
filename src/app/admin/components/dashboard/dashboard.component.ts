import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService){}

  ngOnInit(): void {
  }
  m(){
    this.alertify.message("Merhaba", {
      messageType: MessageType.Success,
      delay : 5,
      position : Position.TopRight,
      dismissOthers : true
    });
  }
  d(){
    this.alertify.dismiss();
  }
}
