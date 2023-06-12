import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TypeService = class TypeService {
    constructor(http) {
        this.http = http;
    }
    read(id) {
        return this.http.get("http://localhost:8081/api/type/" + id);
    }
};
TypeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TypeService);
export { TypeService };
//# sourceMappingURL=type-service.service.js.map