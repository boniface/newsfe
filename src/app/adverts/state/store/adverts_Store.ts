import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Adverts} from '../models/adverts';

export interface AdvertsState extends EntityState<Adverts, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'users',
  idKey: 'userId',
  cache: {
    ttl: 3600000
  }
})


export class AdvertsStore extends EntityStore<AdvertsState, Adverts> {
  constructor() {
    super();
  }
}
