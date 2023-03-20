import { Component } from '@angular/core';
import {  ModalController,NavController} from '@ionic/angular';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
     public navCtrl:NavController,
     public modalCtrl:ModalController
  ) { }


  async logIn(){
    const profileModal = await this.modalCtrl.create({
      component: LoginPage
    });

    profileModal.onDidDismiss().then((data) => {
      console.log(data)
    });

    profileModal.present();
  }

}
