import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './body/main/main.component';
import { AboutComponent } from './body/about/about.component';
import { ResumeComponent } from './body/resume/resume.component';
import { ProjectsComponent } from './body/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  },
  {
    path: 'cv',
    component: ResumeComponent,
    children: []
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
