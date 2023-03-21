import { Component,OnInit } from '@angular/core';
import { NavController,ModalController,NavParams } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { ItemDetailPage } from '../item-detail/item-detail.page';
import { Router } from '@angular/router';
import { Data } from '../data.service';

export interface Item {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams]
})

export class HomePage implements OnInit {

  public items!: Item[];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private router: Router,
    private dataSevice:Data
  ) {

  }

  async addItem() {
    const modal = await this.modalCtrl.create({
      component: AddItemPage
    });
    modal.onDidDismiss().then((response) => {
      console.log("Response: "+response.data);
      console.log(response.data['roles']);
      if (response.data.role === 'success') {
        const item: Item = response.data.data;
        this.saveItem(item);
      }
    });

    return await modal.present();
  }

  ngOnInit(){
    this.items =[];
    this.dataSevice.getData().then((todos)=>{
        console.log(todos);
        this.items = todos;
        console.log(this.items);

    })
  }

  viewItem(item:Item){
    this.router.navigate(['item-detail', { item: JSON.stringify(item) }]);
  }

  saveItem(item:Item){
    if (this.items === null) {
      this.items = [];
    }
    this.items.push(item);
    console.log(this.items);
    this.dataSevice.save(this.items);
  }
}
