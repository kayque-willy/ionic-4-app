import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsersPage } from './users.page';
const routes = [
    {
        path: '',
        component: UsersPage
    }
];
let UsersPageModule = class UsersPageModule {
};
UsersPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [UsersPage]
    })
], UsersPageModule);
export { UsersPageModule };
//# sourceMappingURL=users.module.js.map