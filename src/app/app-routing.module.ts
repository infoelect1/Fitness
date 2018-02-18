import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', loadChildren: './core/login/login.module#LoginModule'},
  {path: 'usuario', loadChildren: './core/usuario/usuario.module#UsuarioModule', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[HomeComponent]
})
export class AppRoutingModule { }
