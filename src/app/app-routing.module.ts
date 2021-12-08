import { PostComponent } from './modules/posts/pages/post/post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAppComponent } from './shared/pages/container-app/container-app.component';

const routes: Routes = [
  {
    path:'',
    component: ContainerAppComponent,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then(m=> m.AboutModule)
      },
      {
        path:'', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
