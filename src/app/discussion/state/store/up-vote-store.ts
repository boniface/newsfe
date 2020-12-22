import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {UpVote} from '../models/up-vote.model';

export interface UpVoteState extends EntityState<UpVote, string> {
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

export class UpVoteStore extends EntityStore<UpVoteState, UpVote> {
  constructor() {
    super();
  }
}
