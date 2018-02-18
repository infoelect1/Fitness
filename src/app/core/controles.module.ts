import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatMenuModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatMenuModule
    ]
})
export class ControlesModule { }
