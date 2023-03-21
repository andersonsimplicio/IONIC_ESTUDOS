import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


export interface Item {
  title: string;
  description: string;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  providers: [NavParams]
})
export class ItemDetailPage implements OnInit {
  public item!: Item;


  constructor(
    private navParams: NavParams,
    private activatedRoute: ActivatedRoute,
    private navCtrl:NavController
    ) {
    const itemString: string | null = this.activatedRoute.snapshot.paramMap.get('item');
    this.item = JSON.parse(itemString ?? "");
   }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }

}
