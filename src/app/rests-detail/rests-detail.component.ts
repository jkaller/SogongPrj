import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-rests-detail',
  templateUrl: './rests-detail.component.html',
  styleUrls: ['./rests-detail.component.css']
})
export class RestsDetailComponent implements OnInit {
@Input() hero: Hero;


  constructor(
  private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getRest(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void{
  this.location.back();
  }
}
