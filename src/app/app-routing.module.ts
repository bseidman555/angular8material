import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import {ExamplesComponent} from './examples/examples.component'

const routes: Routes = [
  { path: 'resume' , component: ResumeComponent },
  { path: 'experience', component: ExperienceComponent},
  { path: 'examples', component: ExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ExperienceComponent, ResumeComponent, ExamplesComponent]
