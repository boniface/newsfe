import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Reputation} from '../models/reputation.model';
import {ReputationService} from '../services/reputation.service';
import {ReputationState, ReputationStore} from '../store/reputation-store';
import {Observable} from 'rxjs';

// @ts-ignore
// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class ReputationQueries extends QueryEntity<ReputationState, Reputation> {
  constructor(
    protected store: ReputationStore,
    private service: ReputationService
  ) {
    super(store);
  }
  public ReputationQueries(userId: string, year: string): Observable<Reputation> {
    const id = userId + ',' + year;
    if (this.hasEntity(userId) === false) {
      this.service.hasOwnProperty('');
      return this.selectEntity(id);
    }
    return this.selectEntity(id);
  }

  /**
   *  More Queries Follow Below
   */
}
