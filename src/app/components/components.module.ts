import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { StoryBookComponent } from './story-book/story-book.component';
import { CurriculumnCvComponent } from './curriculumn-cv/curriculumn-cv.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [MainComponent, StoryBookComponent, CurriculumnCvComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    DragDropModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
