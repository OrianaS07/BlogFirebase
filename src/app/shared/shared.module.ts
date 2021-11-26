import { RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPostComponent } from './components/button-post/button-post.component';
import { MenuPostComponent } from './components/menu-post/menu-post.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    CardPostComponent,
    ListPostsComponent,
    ButtonPostComponent,
    MenuPostComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CardPostComponent,
    ListPostsComponent,
    HeaderComponent,
    ButtonPostComponent,
    MenuPostComponent,
  ]
})
export class SharedModule { }
