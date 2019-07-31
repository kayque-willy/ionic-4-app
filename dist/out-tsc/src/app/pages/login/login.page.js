import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DatabaseService } from 'src/app/services/database.service';
let LoginPage = class LoginPage {
    constructor(
    //Exibição da mensagem de loading
    loadingCtrl, 
    //Exibição de outras mensagens
    toastCtrl, 
    //Autenticador do login
    authService, 
    //Banco de dados SQLite
    db) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.db = db;
        this.wavesPosition = 0;
        this.wavesDiference = 80;
        this.userLogin = {
            id: null,
            name: '',
            email: '',
            password: '',
            img: ''
        };
        this.userRegister = {
            id: null,
            name: '',
            email: '',
            password: '',
            img: ''
        };
    }
    ngOnInit() { }
    segmentChanged(event) {
        if (event.detail.value == "login") {
            this.slides.slidePrev();
            this.wavesPosition += this.wavesDiference;
        }
        else {
            this.slides.slideNext();
            this.wavesPosition -= this.wavesDiference;
        }
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.presentLoading();
            try {
                this.authService.login(this.userLogin);
            }
            catch (error) {
                this.presentToast(error.message);
            }
            finally {
                this.loading.dismiss();
            }
        });
    }
    register() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.presentLoading();
            try {
                this.db.addUser(this.userRegister['name'], this.userRegister['email'], this.userRegister['password'], this.userRegister['img']);
            }
            catch (error) {
                this.presentToast(error.message);
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
tslib_1.__decorate([
    ViewChild(IonSlides, { static: false }),
    tslib_1.__metadata("design:type", IonSlides)
], LoginPage.prototype, "slides", void 0);
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController,
        ToastController,
        AuthenticationService,
        DatabaseService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map