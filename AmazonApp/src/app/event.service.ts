import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private itemUpdated = new Subject<void>();

  itemUpdated$ = this.itemUpdated.asObservable();

  constructor() { }

  emitItemUpdated() {
    this.itemUpdated.next();
  }
}
