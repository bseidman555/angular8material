import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'resume' , component: ResumeComponent },
  { path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ExperienceComponent, ResumeComponent]
