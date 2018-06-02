import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-rests',
  templateUrl: './rests.component.html',
  styleUrls: ['./rests.component.css']
})
export class RestsComponent implements OnInit {

 heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getRests()
    .subscribe(heroes => this.heroes = heroes);
  }

}
