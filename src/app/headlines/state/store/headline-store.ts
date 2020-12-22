import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Headlines} from '../models/headlines';

export interface HeadlinesState extends EntityState<Headlines, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'users',
  idKey: 'Id',
  cache: {
    ttl: 3600000
  }
})

export class HeadlinesStore extends EntityStore<HeadlinesState, Headlines> {
  constructor() {
    super();
  }
}
