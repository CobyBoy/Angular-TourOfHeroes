import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/heroes/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
   }
  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
    })
  }

  public save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() =>
        this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }

}
