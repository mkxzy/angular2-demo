import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  // templateUrl: './app.component.html',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  // hero = "Michael";
  hero: Hero = {
    id: 1,
    name: 'Michael'
  };

  heroes: Hero[];

  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
