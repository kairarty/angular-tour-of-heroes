import {Component} from '@angular/core';
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes$ = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {
  }

}
