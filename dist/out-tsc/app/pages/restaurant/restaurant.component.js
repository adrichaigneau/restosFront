import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RestaurantComponent = class RestaurantComponent {
    constructor(router, restaurantService, sanitizer) {
        this.router = router;
        this.restaurantService = restaurantService;
        this.sanitizer = sanitizer;
        this.id = 0;
        this.restaurant = {};
    }
    ngOnInit() {
        const idStr = this.router.snapshot.paramMap.get("id");
        this.id = idStr ? +idStr : 0;
        this.restaurantService
            .read(this.id)
            .subscribe((data) => this.restaurant = data);
        //this.map = this.sanitizer.bypassSecurityTrustResourceUrl(this.restaurant.maps!);
        //this.map
    }
};
RestaurantComponent = __decorate([
    Component({
        selector: 'app-evenement',
        templateUrl: './restaurant.component.html',
        styleUrls: ['./restaurant.component.scss']
    })
], RestaurantComponent);
export { RestaurantComponent };
//# sourceMappingURL=restaurant.component.js.map