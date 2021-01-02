import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Comments} from '../../models/discussion/comments.model';

export interface CommentsState extends EntityState<Comments, string> {
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

export class CommentsStore extends EntityStore<CommentsState, Comments> {
  constructor() {
    super();
  }
}
