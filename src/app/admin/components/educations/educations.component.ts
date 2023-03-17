import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Education } from 'src/app/contracts/education';
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

    this.httpClientService.get<Education[]>({
      controller: "educations"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller:"educations"
    // },{
    //   title:"Ders",
    //   SubTitle: "Ders2",
    //   SubTitle2: "Ders3",
    //   GPA: "3",
    //   Date: "devam ediyor"
    // }).subscribe();

    // this.httpClientService.Put({
    //   controller:"educations",
    // },{
    //   id: "c3fc81e2-a113-4593-adf7-08db26b3ef1c",
    //   Title: "Değişken Ders",
    //   SubTitle: "Değişken Ders2",
    //   SubTitle2: "Değişken Ders2",
    //   GPA: "2,59",
    //   Date: "Bitirdi"
    // }).subscribe();

    // this.httpClientService.Delete({
    //   controller:"educations"
    // },"54ac6771-8ca5-4a14-be5a-043af65fa3a3").subscribe();

    // this.httpClientService.get({
    //   baseUrl:"https://jsonplaceholder.typicode.com",
    //   controller:"posts"
    // }).subscribe(data => console.log(data));
  }

}
