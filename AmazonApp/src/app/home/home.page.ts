import { Component,OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AdditemPage } from '../additem/additem.page';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
export type Item = {
  id:string
  product: string;
  description: string;
  price:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams]
})
export class HomePage implements OnInit {

  items: Item[] = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private router: Router,
    private dataSevice:DataService
    ) { }

    ngOnInit(): void {
      this.items = [];
      this.dataSevice.getData().then((database)=>{
        this.items = database;
      });
      this.dataSevice.dataChanged.subscribe(() => { // se inscreve no evento
        this.updateItems();
      });
    }



  saveItem(item:Item){
    if (this.items === null) {
      this.items = [];
    }
    this.items.push(item);
    this.dataSevice.save(this.items);
  }

  async addItem() {
    const modal = await this.modalCtrl.create({
      component: AdditemPage
    });
    modal.onDidDismiss().then((response) => {
      if (response.data.role === 'success') {
        const item: Item = response.data.data;
        this.saveItem(item);
      }
    });

    return await modal.present();
  }


  async updateItems() {
    const data = await this.dataSevice.getData();
    if (data) {
      this.items = data;
    }
  }


  DeleteItem(item:Item){
    this.dataSevice.deleteItem(item).then(() => {
      this.dataSevice.dataChanged.emit();
    });

  }

  viewItem(item:Item){
    this.router.navigate(['detail', { item: JSON.stringify(item), items: JSON.stringify(this.items) }]).then();
  }
}
