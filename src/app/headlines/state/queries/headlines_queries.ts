import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {UserState, UserStore} from '../../../users/state/store/user-store';
import {User} from '../../../users/state/models/user.model';
import {UserService} from '../../../users/state/services/user.service';
import {HeadlinesService} from '../services/headlines.service';
import {Headlines} from '../models/headlines';

@Injectable({
  providedIn: 'root'
})

export class HeadlinesQueries extends QueryEntity<HeadlinesState, Headlines> {
  constructor(
    protected store: HeadlinesStore,
    private service: HeadlinesService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}
