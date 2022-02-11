import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero [] = [];

  constructor(private heroService: HeroService) { 
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  public addHero(heroName: string) {
    heroName = heroName.trim();
    if (!heroName) { return };
    this.heroService.addHero({ heroName } as unknown as Hero).subscribe(
      hero => {
        this.heroes.push(hero);
      }
    )
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
