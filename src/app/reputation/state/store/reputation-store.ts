import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {User} from '../../../users/state/models/user.model';
import {Injectable} from '@angular/core';
import {Reputation} from '../models/reputation.model';

export interface ReputationState extends EntityState<Reputation, string> {
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


export class ReputationStore extends EntityStore<ReputationState, User> {
  constructor() {
    super();
  }
}
