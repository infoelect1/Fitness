import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { CoreModule } from './core/core.module';
import { MenuComponent } from './core/menu/menu.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RazonesComponent } from './razones/razones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RazonFormularioComponent } from './razones/razon-formulario/razon-formulario.component';
import { RazonService } from './razones/razon.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RazonesComponent,
    RazonFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
//    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RazonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
