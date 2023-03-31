import { Component } from '@angular/core';
import { HttpClientService } from './services/common/http-client.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CvManagement';

  constructor(private toastrService: CustomToastrService, private httpClientService: HttpClientService) {
  }

  ngOnInit(): void {
    // this.httpClientService.get({
    //   fullEndPoint: "https://www.tcmb.gov.tr"
    //  }).subscribe(data => console.log(data));
  }

}

