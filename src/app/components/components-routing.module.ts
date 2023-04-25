import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumnCvComponent } from './curriculumn-cv/curriculumn-cv.component';
import { MainComponent } from './main/main.component';
import { StoryBookComponent } from './story-book/story-book.component';
import { GenericPageNotFoundComponent } from '../shared/generic-page-not-found/generic-page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      { path: 'cv', component: CurriculumnCvComponent },
      { path: 'story', component: StoryBookComponent },
      { path: '**',  redirectTo: 'cv', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
