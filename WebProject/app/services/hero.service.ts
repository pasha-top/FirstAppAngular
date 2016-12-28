import { Injectable } from '@angular/core';
import {Hero} from "../models/hero";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class HeroService {

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get("/Hero/GetHeroes")
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.Id === id));
    }
}
