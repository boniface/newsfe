import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ResponsesCount} from '../../models/stats/responses-count-model';
import {ArticleComment} from '../../models/discussion/article-comment.model';
import {DownVote} from '../../models/discussion/down-vote.model';
import {DownVoteState} from './down-vote';

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

