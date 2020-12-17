import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {UserState, UserStore} from '../../../users/state/store/user-store';
import {User} from '../../../users/state/models/user.model';
import {UserService} from '../../../users/state/services/user.service';
import { HeaderService } from '../services/header.service';
import {Header} from '../models/header';

@Injectable({
  providedIn: 'root'
})

export class HeaderQueries extends QueryEntity<HeaderState, Header> {
  constructor(
    protected store: HeaderStore,
    private service: HeaderService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}
