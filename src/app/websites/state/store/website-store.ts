import {Website} from '../models/website.model';
import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface WebsiteState extends EntityState<Website, string> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'websites',
  idKey: 'siteCode',
  cache: {
    ttl: 3600000
  }
})

export class WebsiteStore extends EntityStore<WebsiteState, Website>{
  constructor() {
    super();
  }
}
