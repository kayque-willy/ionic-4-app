import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserPage } from './user.page';
const routes = [
    {
        path: '',
        component: UserPage
    }
];
let UserPageModule = class UserPageModule {
};
UserPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [UserPage]
    })
], UserPageModule);
export { UserPageModule };
//# sourceMappingURL=user.module.js.map