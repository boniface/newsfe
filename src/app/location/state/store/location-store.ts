import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Website} from '../../../websites/state/models/website.model';


export interface LocationState extends EntityState<Location, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'websites',
  idKey: 'id',
  cache: {
    ttl: 3600000
  }
})


export class LocationStore extends EntityStore<LocationState, Location> {
  constructor() {
    super();
  }
}
