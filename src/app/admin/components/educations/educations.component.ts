import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent extends BaseComponent{

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom);

  }

}
