import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ArticleComment} from '../../models/discussion/article-comment.model';

export interface ArticleCommentState extends EntityState<ArticleComment, string> {
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'comments',
  idKey: 'id',
  cache: {
    ttl: 3600000
  }
})
export class ArticleCommentStore  extends EntityStore<ArticleCommentState, ArticleComment> {
  constructor() {
    super();
  }
}

