import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from '../posts/posts.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    PostsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
