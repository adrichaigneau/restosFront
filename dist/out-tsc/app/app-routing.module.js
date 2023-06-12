import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { HomeComponent } from './pages/home/home.component';
import { TypeComponent } from './pages/type/type.component';
const routes = [
    {
        path: 'accueil',
        component: HomeComponent
    },
    {
        path: 'restaurant/:id',
        component: RestaurantComponent
    },
    {
        path: 'type/:id',
        component: TypeComponent
    },
    {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map