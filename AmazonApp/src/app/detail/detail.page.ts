import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../home/home.page';
import { DataService } from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  providers: [NavParams]
})
export class DetailPage implements OnInit {
  public item!: Item;

 constructor(
    private navParams: NavParams,
    private activatedRoute: ActivatedRoute,
    private navCtrl:NavController,
    private database:DataService
    ) {
    const itemString: string | null = this.activatedRoute.snapshot.paramMap.get('item');
    this.item = JSON.parse(itemString ?? "");
   }


  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back();
  }

  updateItem(){
    const itemUpdate: Item = {
      product: this.item.product,
      description: this.item.description,
      id: this.item.id,
      price: this.item.price
    };

    this.database.updateItem(itemUpdate).then(() => {
      this.database.dataChanged.emit();
      this.navCtrl.back();
    });

  }

}
