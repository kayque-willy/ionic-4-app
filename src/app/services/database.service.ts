import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number,
  name: string,
  email: string,
  password: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  users = new BehaviorSubject([]);
  products = new BehaviorSubject([]);

  constructor(
    private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http: HttpClient
  ) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'users.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
          this.database = db;
          // this.seedDatabase();
        });
    });
  }

  //Preenche o banco de dados
  seedDatabase() {
    // this.http.get('assets/seed.sql', { responseType: 'text' })
    //   .subscribe(sql => {
    //     this.sqlitePorter.importSqlToDb(this.database, sql)
    //       .then(_ => {
    //         this.loadUsers();
    //         this.loadProducts();
    //         this.dbReady.next(true);
    //       })
    //       .catch(e => console.error(e));
    //   });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }

  //CRU DO USUARIO
  //Carrega todos os usuários
  loadUsers() {
    // return this.database.executeSql('SELECT id, name, email, img FROM user', []).then(data => {
    //   let users: User[] = [];
    //   if (data.rows.length > 0) {
    //     for (var i = 0; i < data.rows.length; i++) {
    //       users.push({
    //         id: data.rows.item(i).id,
    //         name: data.rows.item(i).name,
    //         email: data.rows.item(i).email,
    //         password: data.rows.item(i).password,
    //         img: data.rows.item(i).img
    //       });
    //     }
    //   }
    //   this.users.next(users);
    // });
  }

  // adiciona usuario
  addUser(name, email, password, img) {
    // let data = [name, email, password, img];
    // return this.database.executeSql('INSERT INTO user (name, email, password, img) VALUES (?, ?, ?, ?)', data).then(data => {
    //   this.loadUsers();
    // });
  }

  // retorna usuario pelo id
  //getUser(id): Promise<User> {
    // return this.database.executeSql('SELECT * FROM user WHERE id = ?', [id]).then(data => {
    //   return {
    //     id: data.rows.item(0).id,
    //     name: data.rows.item(0).name,
    //     email: data.rows.item(0).email,
    //     password: data.rows.item(0).password,
    //     img: data.rows.item(0).img
    //   }
    // });
  //}

  //Verifica o login
  login(user: User): any {
    // let data = [user.email, user.password];
    // this.database.executeSql('SELECT * FROM user WHERE email = ? and password = ?', data)
    //   .then((data) => {
    //     return true;
    //   }, (error) => {
    //     return false;
    //   });
  }

  //remove usuario
  deleteUser(id) {
    // return this.database.executeSql('DELETE FROM user WHERE id = ?', [id]).then(_ => {
    //   this.loadUsers();
    //   this.loadProducts();
    // });
  }

  // atualiza usuario
  updateUser(user: User) {
    // let data = [user.name, user.password, user.email, user.img];
    // return this.database.executeSql(`UPDATE user SET name = ?, password = ?,  email = ?, img = ? WHERE id = ${user.id}`, data).then(data => {
    //   this.loadUsers();
    // })
  }

  //CRUD DO PRODUTO
  //Carrega todos os produtos
  loadProducts() {
    // let query = 'SELECT product.name, product.id, user.name AS creator FROM product JOIN user ON user.id = product.creatorId';
    // return this.database.executeSql(query, []).then(data => {
    //   let products = [];
    //   if (data.rows.length > 0) {
    //     for (var i = 0; i < data.rows.length; i++) {
    //       products.push({
    //         name: data.rows.item(i).name,
    //         id: data.rows.item(i).id,
    //         creator: data.rows.item(i).creator,
    //       });
    //     }
    //   }
    //   this.products.next(products);
    // });
  }

  //Adiciona um produto
  addProduct(name, creator) {
    // let data = [name, creator];
    // return this.database.executeSql('INSERT INTO product (name, creatorId) VALUES (?, ?)', data).then(data => {
    //   this.loadProducts();
    // });
  }

}
