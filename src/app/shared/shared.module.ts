import { RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPostComponent } from './components/button-post/button-post.component';
import { MenuPostComponent } from './components/menu-post/menu-post.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ContainerAppComponent } from './pages/container-app/container-app.component';
import { MaterialModule } from '../modules/material/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { PostsModule } from '../modules/posts/posts.module';

@NgModule({
  declarations: [
    CardPostComponent,
    ListPostsComponent,
    ButtonPostComponent,
    MenuPostComponent,
    HeaderComponent,
    LoaderComponent,
    ContainerAppComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PostsModule
  ],
  exports:[
    CardPostComponent,
    ListPostsComponent,
    HeaderComponent,
    ButtonPostComponent,
    MenuPostComponent,
    LoaderComponent,
    ModalComponent
  ],
})
export class SharedModule { }
