import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'auth-token';
let AuthenticationService = class AuthenticationService {
    constructor() {
        this.authenticationState = new BehaviorSubject(false);
    }
    login(user) {
        this.authenticationState.next(true);
    }
    logout() {
        this.authenticationState.next(false);
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map