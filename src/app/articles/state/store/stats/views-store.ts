import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Views} from '../../models/stats/views.model';

export interface ViewsState extends EntityState<Views, string> {
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'views',
  idKey: 'articleId',
})
export class ViewsStore extends EntityStore<ViewsState, Views> {
  constructor() {
    super();
  }
}
