import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from 'src/app/shared/components/list-posts/list-posts.component';

const routes: Routes = [
  {
    path: '',
    component: ListPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsListRoutingModule { }
