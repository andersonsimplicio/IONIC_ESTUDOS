import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public actionSheetCrtl:ActionSheetController
  ) {}

  async openMenu(){
    const actionSheet = await this.actionSheetCrtl.create({
      header:'Update Albun',
      buttons:[
        {
          text:"Destructive",
          role:"Destructive",
          handler:() =>{
              console.log('Clicou em Destructive')
          }
        },
        {
          text:"Create",
          handler:() =>{
              console.log('Clicou Criar')
          }
        },
        {
          text:"Play",
          handler:() =>{
              console.log('Play Clicado')
          }
        },
        {
          text:"Favorite",
          handler:() =>{
              console.log('Clicou Favorito')
          }
        },
        {
          text:"Cancelar",
          role:'cancel',
          handler:() =>{
              console.log('Clicou Cancelar')
          }
        }
      ]
    });

    await actionSheet.present()
  }
}
