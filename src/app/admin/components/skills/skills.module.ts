import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RouterModule } from '@angular/router';
import { ExperiencesComponent } from '../experiences/experiences.component';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component:SkillsComponent}
    ])
  ]
})
export class SkillsModule { }
