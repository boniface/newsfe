import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {LocationService} from '../../../location/state/services/location.service';
import { Reputation } from '../models/reputation.model';
import {ReputationService} from '../services/reputation.service';

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

  /**
   *  More Queries Follow Below
   */
}
