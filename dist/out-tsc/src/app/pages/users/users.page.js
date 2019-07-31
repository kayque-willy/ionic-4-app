import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
let UsersPage = class UsersPage {
    constructor(db) {
        this.db = db;
        this.users = [];
        this.user = {};
        this.product = {};
        this.selectedView = 'users';
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.db.getUsers().subscribe(users => {
                    this.users = users;
                });
                this.products = this.db.getProducts();
            }
        });
    }
    addUser() {
        this.db.addUser(this.user['name'], this.user['email'], this.user['password'], this.user['img'])
            .then(_ => {
            this.user = {};
        });
    }
    addProduct() {
        this.db.addProduct(this.product['name'], this.product['creator'])
            .then(_ => {
            this.product = {};
        });
    }
};
UsersPage = tslib_1.__decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.page.html',
        styleUrls: ['./users.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DatabaseService])
], UsersPage);
export { UsersPage };
//# sourceMappingURL=users.page.js.map