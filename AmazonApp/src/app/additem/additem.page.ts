import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Item } from '../home/home.page';
import {v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {
  newItem: Item;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.newItem={
      id:"",
      product:"",
      price:"",
      description:"",
    }
   }

  ngOnInit() {

  }

  saveItem(){
    const item: Item = {
      product: this.newItem.product,
      description: this.newItem.description,
      id: uuidv4(),
      price: this.newItem.price
    };

    this.modalCtrl.dismiss({
      data: item,
      role: 'success'
    });
  }

}
