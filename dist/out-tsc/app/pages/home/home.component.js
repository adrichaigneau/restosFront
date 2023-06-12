import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(restaurantService, typeService) {
        this.restaurantService = restaurantService;
        this.typeService = typeService;
        this.restaurants = [];
    }
    suggestion(saisie) {
        this.restaurantService
            .search(saisie)
            .subscribe((data) => this.restaurants = data);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map