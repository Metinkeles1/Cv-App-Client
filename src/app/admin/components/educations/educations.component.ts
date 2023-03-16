import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent extends BaseComponent{

  constructor(spinner: NgxSpinnerService) {
    super(spinner)
  }

  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallAtom);
  }

}
