﻿import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./models/hero";

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.template.html',
    styleUrls: ['app/app.component.css'],
})


export class AppComponent {
    title = 'My First Angular 2 App "Heroes"';
    selectedHero: Hero;
    heroes = HEROES;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

