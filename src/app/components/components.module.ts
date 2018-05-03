import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
  HeroesComponent,
  HeroDetailComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [HeroesComponent],
  providers: [],
  bootstrap: []
})

export class ComponentsModule { }
