import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {LocationService} from '../services/location.service';
import {LocationState, LocationStore} from '../store/location-store';

@Injectable({
  providedIn: 'root'
})

export class LocationQueries extends QueryEntity<LocationState, Location> {
  constructor(
    protected store: LocationStore,
    private service: LocationService
  ) {
    super(store);
  }
}
