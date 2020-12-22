import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Votes} from '../models/votes.model';

export interface VotesState extends EntityState<Votes, string> {
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

export class VotesStore extends EntityStore<VotesState, Votes> {
  constructor() {
    super();
  }
}
