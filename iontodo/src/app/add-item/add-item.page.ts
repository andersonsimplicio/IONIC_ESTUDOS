import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';


export interface Item {
  title: string;
  description: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  newItem: Item  = { title: '', description: '' };
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  saveItem(){
    const item: Item = {
      title: this.newItem.title,
      description: this.newItem.description
    };
    this.modalCtrl.dismiss({
      data: item,
      role: 'success'
    });
  }

}
