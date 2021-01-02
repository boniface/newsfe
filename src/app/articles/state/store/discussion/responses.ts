import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Responses} from '../../models/discussion/responses.model';

export interface ResponsesState extends EntityState<Responses, string> {
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

export class ResponsesStore extends EntityStore<ResponsesState, Responses> {
  constructor() {
    super();
  }
}
