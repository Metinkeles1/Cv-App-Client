import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Education } from 'src/app/contracts/create_education';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent extends BaseComponent {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {

  }

  @ViewChild(ListComponent) listComponents: ListComponent

  createdEducation(createdEducation: Create_Education) {
    this.listComponents.getEducations();
  }

}
