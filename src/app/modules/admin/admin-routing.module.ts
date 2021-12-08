import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./modules/post-list/posts-list.module').then(m => m.PostsListModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../admin/modules/profile/profile.module').then( m => m.ProfileModule)
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
