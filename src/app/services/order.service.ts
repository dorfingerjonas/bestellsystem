import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase) {
  }

  persist(order: Order): Promise<void> {
    this.db.list('stats/orders').push(order);

    return new Promise((resolve, reject) => {
      this.db.list('orders').push(order)
        .then(res => resolve())
        .catch(err => reject());
    });
  }
}
