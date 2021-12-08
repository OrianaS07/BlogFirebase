import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './pages/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PostComponent,
    NewPostComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    NewPostComponent
  ]
})
export class PostsModule { }
