import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { Dashboard } from './dashboard/dashboard.component'
import { PersonalCabinet } from './personalCabinet/personalCabinet.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule,routing],
    declarations: [
        AppComponent,
        Dashboard,
        PersonalCabinet,
        HeroDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
