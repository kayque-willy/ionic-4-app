import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.isAuthenticated();
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthenticationService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map