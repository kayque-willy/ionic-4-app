import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor() {
  }

  login() {
    this.authenticationState.next(true);
  }

  logout() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}