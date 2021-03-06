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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const router_1 = require('@angular/router');
const app_component_1 = require('./app.component');
const hero_detail_component_1 = require('./hero-detail/hero-detail.component');
const hero_service_1 = require("./services/hero.service");
const hero_component_1 = require("./hero/hero.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([{
                    path: 'heroes',
                    component: hero_component_1.HeroComponent
                }, {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'detail/:id',
                    component: hero_detail_component_1.HeroDetailComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_component_1.HeroComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboard_component_1.DashboardComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module - Copy.js.map