import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Footer} from '../../../footer/state/models/footer';
import {Injectable} from '@angular/core';
import { Header } from '../models/header';

export interface HeaderState extends EntityState<Header, string> {
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

export class HeaderStore extends EntityStore<HeaderState, Header> {
  constructor() {
    super();
  }
}
