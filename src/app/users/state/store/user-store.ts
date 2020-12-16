import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';

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
