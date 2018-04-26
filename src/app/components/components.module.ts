import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
  HeroesComponent],
  imports: [
    BrowserModule
  ],
  exports: [HeroesComponent],
  providers: [],
  bootstrap: []
})

export class ComponentsModule { }
