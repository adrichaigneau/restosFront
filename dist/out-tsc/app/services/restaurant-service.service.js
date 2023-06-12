import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RestaurantService = class RestaurantService {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    /*public getForm() {
      return this.fb.group({
        id: '',
        nom: ['' , Validators.required],
        description: ['' , Validators.required],
        type: ['' , Validators.required]
      })
    }*/
    search(nom) {
        return this.http.get("http://localhost:8081/api/restaurant?nom=" + nom);
    }
    read(id) {
        return this.http.get("http://localhost:8081/api/restaurant/" + id);
    }
    searchType(nomType, nomResto) {
        return this.http.get("http://localhost:8081/api/restaurant?type=" + nomType + "&nom=" + nomResto);
    }
};
RestaurantService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RestaurantService);
export { RestaurantService };
//# sourceMappingURL=restaurant-service.service.js.map