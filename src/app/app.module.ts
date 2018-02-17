import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
  MatMenuModule
 } from '@angular/material';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
