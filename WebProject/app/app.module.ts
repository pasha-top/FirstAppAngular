import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from "./services/hero.service";
import {HeroComponent} from "./hero/hero.component"
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-roting.module"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
        /*RouterModule.forRoot([{
            path: 'heroes',
            component: HeroComponent
        }, {
                path: 'dashboard',
                component: DashboardComponent
            },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {
            path: 'detail/:id',
            component: HeroDetailComponent
        }

        ])*/
    ],
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
    
export class AppModule { }
