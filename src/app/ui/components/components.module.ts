import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationsModule } from './educations/educations.module';
import { SkillsModule } from './skills/skills.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EducationsModule,
    SkillsModule,
    ExperiencesModule,
    HomeModule
  ]
})
export class ComponentsModule { }
