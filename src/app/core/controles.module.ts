import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    
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
        MatMenuModule,
        MatTableModule,
        MatInputModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatInputModule
    ]
})
export class ControlesModule { }
