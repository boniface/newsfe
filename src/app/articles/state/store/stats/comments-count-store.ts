import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {CommentsCount} from '../../models/stats/comments-count-model';

export interface CommentsCountState extends EntityState<CommentsCount, string> {
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'comments-count',
  idKey: 'articleId',
})
export class CommentsCountStore extends EntityStore<CommentsCountState, CommentsCount> {
  constructor() {
    super();
  }
}
