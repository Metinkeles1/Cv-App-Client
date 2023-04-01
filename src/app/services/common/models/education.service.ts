import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create_Education } from 'src/app/contracts/create_education';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClientService: HttpClientService) { }

  create(education: Create_Education, successCallBack?: any, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "educations"
    }, education)
      .subscribe({
        next: result => {
          successCallBack();
        },
        error: (errorResponse: HttpErrorResponse) => {
          // const _error: Array<{ key: string; value: Array<string> }> = errorResponse.error;
          let message = "";
          let _error2: { key: string, values: Array<string> }[]
            = errorResponse.error;

          for (let key in _error2) {
            let value = _error2[key];
            message += `${value}<br>`
          }
          errorCallBack(message);
        },
        complete: () => console.info("Başarılı")
      });
  }


}
