import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SanitizedUrlPipe = class SanitizedUrlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
};
SanitizedUrlPipe = __decorate([
    Pipe({
        name: 'sanitizedUrl'
    })
], SanitizedUrlPipe);
export { SanitizedUrlPipe };
//# sourceMappingURL=safe.pipe.js.map