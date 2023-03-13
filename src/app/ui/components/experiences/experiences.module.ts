import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ExperiencesComponent }
    ])
  ]
})
export class ExperiencesModule { }
