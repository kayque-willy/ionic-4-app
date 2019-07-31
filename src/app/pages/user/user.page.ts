import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, User } from 'src/app/services/database.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

export class UserPage implements OnInit {
  user: User = null;
  
  constructor(
    private route: ActivatedRoute, 
    private db: DatabaseService, 
    private router: Router, 
    private toast: ToastController) { }
 
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
    this.db.updateUser(this.user).then(async (res) => {
      let toast = await this.toast.create({
        message: 'User updated',
        duration: 3000
      });
      toast.present();
    });
  }

}
