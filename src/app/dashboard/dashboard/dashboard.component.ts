import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public heroes: Hero[] = []
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.slice(1, 5);
    })
  }

}
