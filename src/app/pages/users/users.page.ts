import { Component, OnInit } from '@angular/core';
import { User, DatabaseService } from 'src/app/services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})

export class UsersPage implements OnInit {

  users: User[] = [];
  products: Observable<any[]>;
  user = {};
  product = {};
  selectedView = 'users';

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getUsers().subscribe(users => {
          this.users = users;
        })
        this.products = this.db.getProducts();
      }
    });
  }
 
  addUser() {
    // this.db.addUser(this.user['name'], this.user['email'], this.user['password'], this.user['img'])
    // .then(_ => { 
    //   this.user = {};
    // });
  }
 
  addProduct() {
    // this.db.addProduct(this.product['name'], this.product['creator'])
    // .then(_ => {
    //   this.product = {};
    // });
  }

}
