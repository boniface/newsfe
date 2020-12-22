import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface ResponseState extends EntityState<Response, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'users',
  idKey: 'Id',
  cache: {
    ttl: 3600000
  }
})

export class ResponseStore extends EntityStore<ResponseState, Response> {
  constructor() {
    super();
  }
}
