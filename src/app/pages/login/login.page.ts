import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DatabaseService, User } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDiference: number = 80;
  public userLogin: User = {
    id: null,
    name: '',
    email: '',
    password: '',
    img: ''
  }
  public userRegister: User= {
    id: null,
    name: '',
    email: '',
    password: '',
    img: ''
  }
  private loading: any;

  constructor(
    //Exibição da mensagem de loading
    private loadingCtrl: LoadingController,
    //Exibição de outras mensagens
    private toastCtrl: ToastController,
    //Autenticador do login
    private authService: AuthenticationService,
    //Banco de dados SQLite
    private db: DatabaseService
  ) { }

  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value == "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDiference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDiference;
    }
  }

  async login() {
    await this.presentLoading();
    try {
      this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();
    try {
      this.db.addUser(this.userRegister['name'],this.userRegister['email'],this.userRegister['password'], this.userRegister['img']);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
