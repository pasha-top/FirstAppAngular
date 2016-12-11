import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./models/hero";

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.template.html',
    styleUrls: ['app/app.component.css'],
})


export class AppComponent {
    title = 'My First Angular 2 App "Heroes"';
    hero: Hero={
        id: 1,
        name: "Pasha"
    };
}

