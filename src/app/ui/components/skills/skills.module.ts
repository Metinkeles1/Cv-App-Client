import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SkillsComponent }
    ])
  ]
})
export class SkillsModule { }
