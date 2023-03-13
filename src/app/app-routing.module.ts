import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children:[
      {path: "", component: DashboardComponent},
      {path: "educations",loadChildren:() => import("./admin/components/educations/educations.module").then
      (module => module.EducationsModule)},
      {path: "skills",loadChildren:() => import("./admin/components/skills/skills.module").then
      (module => module.SkillsModule)},
      {path: "experiences",loadChildren:() => import("./admin/components/experiences/experiences.module").then
      (module => module.ExperiencesModule)}
    ]
  },
  {path:"", component: HomeComponent},
  {path:"educations",loadChildren:() => import("./ui/components/educations/educations.module").then
  (module => module.EducationsModule)},
  {path:"skills",loadChildren:() => import("./ui/components/skills/skills.module").then
  (module => module.SkillsModule)},
  {path:"experiences",loadChildren:() => import("./ui/components/experiences/experiences.module").then
  (module => module.ExperiencesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
