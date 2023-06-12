import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SafePipePipe = class SafePipePipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
};
SafePipePipe = __decorate([
    Pipe({
        name: 'safePipe'
    })
], SafePipePipe);
export { SafePipePipe };
//# sourceMappingURL=safe-pipe.pipe.js.map