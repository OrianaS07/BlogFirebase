import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PostsListModule { }
