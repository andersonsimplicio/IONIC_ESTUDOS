import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Item } from './home/home.page';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataChanged = new EventEmitter();

  constructor(private storage: Storage ) {
    this.init();
  }
  async init() {
    await this.storage.create();
  }


  async getData() {
    return this.storage.get('database');
  }

  async save(data: Item[]) {
    await this.storage.set('database', data);
  }

  async deleteItem(item: Item) {
    const data = await this.getData();
    const index = data.findIndex((d: { id: string; }) => d.id === item.id);
    if (index > -1) {
      data.splice(index, 1);
      await this.save(data);
    }
  }
  async updateItem(item: Item) {
    const data = await this.getData();
    const index = data.findIndex((d: { id: string; })=> d.id === item.id);
    if (index > -1) {
      data[index] = item;
      await this.save(data);
    }
  }
}
