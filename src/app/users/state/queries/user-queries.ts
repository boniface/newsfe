import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {UserState, UserStore} from '../store/user-store';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class UserQueries extends QueryEntity<UserState, User> {
  constructor(
    protected store: UserStore,
    private service: UserService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}
