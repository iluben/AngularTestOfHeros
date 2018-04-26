import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heros.';
 hero: Hero = {
   id: 1,
   name: 'WindStorm'
 };

  constructor() { }

  ngOnInit() {
  }

}
