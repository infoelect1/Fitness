import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
