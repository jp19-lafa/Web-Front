import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navigation></app-navigation>
  <router-outlet></router-outlet>
  `,
  styles: [`
  :host {
    display: block;
    background: rgb(240, 240, 240);
  }
  `]
})
export class AppComponent { }
