import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface CommentState extends EntityState<Comment, string> {
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

export class CommentStore extends EntityStore<CommentState, Comment> {
  constructor() {
    super();
  }
}
