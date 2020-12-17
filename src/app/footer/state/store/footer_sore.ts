import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {User} from '../../../users/state/models/user.model';
import {Injectable} from '@angular/core';
import {Footer} from '../models/footer';

export interface FooterState extends EntityState<Footer, string> {
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


export class FooterStore extends EntityStore<FooterState, Footer> {
  constructor() {
    super();
  }
}
