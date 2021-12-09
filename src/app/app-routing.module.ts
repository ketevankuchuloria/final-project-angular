import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { NotFoundComponent } from './shell/notFound/notFound.component';

const routes: Routes = [
  {
    path:'content',
    loadChildren: () => 
    import('./content/content.module').then((m) => m.ContentModule),
  },
  {
    path:'auth',
    loadChildren: () => 
    import('./auth/auth.module').then((m) => m.AuthModule),
  },
  
  {path:'**', component: NotFoundComponent}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }