import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-menu></app-menu>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
