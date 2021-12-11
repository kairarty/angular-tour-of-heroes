import {Component} from '@angular/core';
import {Hero} from "../model/hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  selectedHero!: Hero;
  heroes$ = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
