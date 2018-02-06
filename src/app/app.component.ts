import { Component } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  // hero = "Michael";
}
