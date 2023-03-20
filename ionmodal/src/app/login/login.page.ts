import { Component, OnInit } from '@angular/core';
import { NavController,NavParams,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public viewCrtl:ModalController
    ) { }

  ngOnInit() {
    console.log("Ola mudo!")
  }

  LogIn(email:any,password:any){
    this.viewCrtl.dismiss({email:email,password:password});
  }

}
