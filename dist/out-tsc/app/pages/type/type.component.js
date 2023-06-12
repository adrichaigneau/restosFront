import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TypeComponent = class TypeComponent {
    constructor(router, restaurantService, typeService) {
        this.router = router;
        this.restaurantService = restaurantService;
        this.typeService = typeService;
        this.id = 0;
        this.restaurants = [];
        this.type = {};
    }
    ngOnInit() {
        const idStr = this.router.snapshot.paramMap.get("id");
        this.id = idStr ? +idStr : 0;
        this.typeService.read(this.id)
            .subscribe((data) => this.type = data);
    }
    suggestion(saisie) {
        this.nomType = this.type?.nom;
        this.restaurantService
            .searchType(this.nomType, saisie)
            .subscribe((data) => this.restaurants = data);
    }
};
TypeComponent = __decorate([
    Component({
        selector: 'app-type',
        templateUrl: './type.component.html',
        styleUrls: ['./type.component.scss']
    })
], TypeComponent);
export { TypeComponent };
//# sourceMappingURL=type.component.js.map