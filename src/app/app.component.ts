import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CvManagement';

  constructor(private toastrService: CustomToastrService){
    toastrService.message("Merhaba","metin", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopCenter
    });
  }

}

