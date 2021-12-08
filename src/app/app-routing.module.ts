import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
  {
    path:'',
    loadChildren: () => 
    import('./content/content.module').then((m) => m.ContentModule),
  },
  {
    path:'auth',
    loadChildren: () => 
    import('./auth/auth.module').then((m) => m.AuthModule),
  }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }