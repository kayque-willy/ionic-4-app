import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }
];
let MemberRoutingModule = class MemberRoutingModule {
};
MemberRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], MemberRoutingModule);
export { MemberRoutingModule };
//# sourceMappingURL=member-routing.module.js.map