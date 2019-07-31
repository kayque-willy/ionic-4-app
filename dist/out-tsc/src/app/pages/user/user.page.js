import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { ToastController } from '@ionic/angular';
let UserPage = class UserPage {
    constructor(route, db, router, toast) {
        this.route = route;
        this.db = db;
        this.router = router;
        this.toast = toast;
        this.user = null;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let userId = params.get('id');
            this.db.getUser(userId).then(data => {
                this.user = data;
            });
        });
    }
    delete() {
        this.db.deleteUser(this.user.id).then(() => {
            this.router.navigateByUrl('/');
        });
    }
    updateUser() {
        this.db.updateUser(this.user).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toast = yield this.toast.create({
                message: 'User updated',
                duration: 3000
            });
            toast.present();
        }));
    }
};
UserPage = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.page.html',
        styleUrls: ['./user.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, DatabaseService, Router, ToastController])
], UserPage);
export { UserPage };
//# sourceMappingURL=user.page.js.map