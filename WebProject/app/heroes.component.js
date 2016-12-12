"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const hero_service_1 = require('./services/hero.service');
let HeroesComponent = class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
    }
    getHeroes() {
        console.log(0);
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ;
    ngOnInit() {
        this.getHeroes();
    }
    ;
    onSelect(hero) {
        this.selectedHero = hero;
    }
    ;
};
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: '/app/heroes.component.template.html'
    }), 
    __metadata('design:paramtypes', [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map