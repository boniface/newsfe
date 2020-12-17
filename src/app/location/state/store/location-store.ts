import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface LocationStore extends EntityState<Location, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'zoneStatus',
  idKey: 'string',
  cache: {
    ttl: 3600000
  }
})

export class LocationStore extends EntityStore<LocationState, Location> {
  constructor() {
    super();
  }
}



