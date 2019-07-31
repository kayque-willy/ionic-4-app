import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './database.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor() {
  }

  login(user: User) {
    this.authenticationState.next(true);
  }

  logout() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}