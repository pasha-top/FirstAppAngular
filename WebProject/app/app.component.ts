﻿import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./models/hero";
import { HeroService } from './services/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.template.html',
    styleUrls: ['app/app.component.css'],
})


export class AppComponent {
    title = 'My First Angular 2 App "Heroes"';
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


