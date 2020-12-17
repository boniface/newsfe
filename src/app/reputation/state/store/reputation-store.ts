import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {User} from '../../../users/state/models/user.model';
import {Injectable} from '@angular/core';

export interface UserState extends EntityState<User, string> {
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


export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    super();
  }
}
