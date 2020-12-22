import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {LocationService} from '../services/location.service';
import {LocationStore} from '../store/location-store';

@Injectable({
  providedIn: 'root'
})

export class LocationQueries extends QueryEntity<LocationStore, Location> {
  constructor(
    protected store: LocationStore,
    private service: LocationService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}
