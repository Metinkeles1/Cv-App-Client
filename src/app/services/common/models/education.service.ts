import { Injectable } from '@angular/core';
import { Create_Education } from 'src/app/contracts/create_education';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClientService: HttpClientService) { }

  create(education: Create_Education, successCallBack?: any) {
    this.httpClientService.post({
      controller: "educations"
    }, education)
      .subscribe(result => {
        successCallBack();
      })
  }
}
