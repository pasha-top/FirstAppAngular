﻿import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "../models/hero";
import { HeroService } from '../services/hero.service';
import {Router} from "@angular/router"

@Component({
    selector: 'my-heroes',
    templateUrl: '/app/hero/hero.component.template.html',
    styleUrls: ['app/app.component.css']
})


export class HeroComponent {
    title = 'My tours of Heroes';
    selectedHero: Hero;
    heroes: Hero[];
    constructor(private heroService: HeroService, private router: Router) {
        
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };

    ngOnInit(): void {
        this.getHeroes();
    };

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

    gotoDetail(): void {
        console.log(this.selectedHero);
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}


