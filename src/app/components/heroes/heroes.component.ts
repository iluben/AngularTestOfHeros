import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';
import { HEROES } from './../../utils/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heros.';

  heroesList: Hero[] = HEROES;
  selectedHero: Hero;
  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
