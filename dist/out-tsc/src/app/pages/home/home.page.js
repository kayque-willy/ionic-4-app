import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController, ToastController } from '@ionic/angular';
let HomePage = class HomePage {
    constructor(authService, loadingCtrl, toastCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() { }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.presentLoading();
            try {
                yield this.authService.logout();
            }
            catch (error) {
                console.error(error);
            }
            finally {
                this.loading.dismiss();
            }
        });
    }
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: 'Aguarde...' });
            return this.loading.present();
        });
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({ message, duration: 2000 });
            toast.present();
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthenticationService,
        LoadingController,
        ToastController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map