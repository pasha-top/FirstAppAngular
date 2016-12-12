import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "../models/hero";
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: '/app/hero/hero.component.template.html',
    styleUrls: ['app/app.component.css']
})


export class HeroComponent {
    title = 'My tours of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };

    ngOnInit(): void {
        this.getHeroes();
    };

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

}


