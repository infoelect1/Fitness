import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ControlesModule } from './controles.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ControlesModule,
  ],
  declarations: [],
  providers: [AuthService, AuthGuard],
  exports: [ControlesModule]
})
export class CoreModule { }
