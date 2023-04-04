import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Create_Education } from 'src/app/contracts/create_education';
import { list_education } from 'src/app/contracts/list_education';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClientService: HttpClientService) { }

  create(education: Create_Education, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
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

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; educations: list_education[] }> {
    const promiseData: Promise<{ totalCount: number; educations: list_education[] }> = firstValueFrom(this.httpClientService.get<{ totalCount: number; educations: list_education[] }>({
      controller: "educations",
      queryString: `page=${page}&size=${size}`
    }));

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.Delete<any>({
      controller: "educations",
    }, id);

    await firstValueFrom(deleteObservable);
  }

}
