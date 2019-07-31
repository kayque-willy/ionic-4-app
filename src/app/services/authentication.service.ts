import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, DatabaseService } from './database.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    //Banco de dados SQLite
    private db: DatabaseService
  ) { }

  login(user: User) {
    // if(this.db.login(user)){
    this.authenticationState.next(true);
    return true;
    // }else{
    //   return false;
    // }
  }

  logout() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}