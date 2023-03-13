import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationsComponent } from './educations.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EducationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EducationsComponent }
    ])
  ]
})
export class EducationsModule { }
