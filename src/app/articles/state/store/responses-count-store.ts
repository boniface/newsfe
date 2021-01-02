import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Views} from '../models/views.model';
import {Injectable} from '@angular/core';
import {ResponsesCount} from '../models/responses-count-model';

export interface ResponsesCountState extends EntityState<ResponsesCount, string> {
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'responses_count',
  idKey: 'articleId',
})
export class ResponsesCountStore extends EntityStore<ResponsesCountState, ResponsesCount> {
  constructor() {
    super();
  }
}
