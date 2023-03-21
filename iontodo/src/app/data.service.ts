import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export interface Item {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class Data {


  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    await this.storage.create();
  }


  async getData() {
    console.log("GetData()"+this.storage);
    return this.storage.get('todos');
  }

  async save(data: Item[]) {
    console.log(data);
    await this.storage.set('todos', data);
  }
}
