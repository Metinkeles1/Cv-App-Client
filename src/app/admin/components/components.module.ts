import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsModule } from './skills/skills.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { EducationsModule } from './educations/educations.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SkillsModule,
    DashboardModule,
    ExperiencesModule,
    EducationsModule
  ]
})
export class ComponentsModule { }
