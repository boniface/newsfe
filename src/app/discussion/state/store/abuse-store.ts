import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Abuse} from '../models/abuse.model';

export interface AbuseState extends EntityState<Abuse, string> {
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

export class AbuseStore extends EntityStore<AbuseState, Abuse> {
  constructor() {
    super();
  }
}
