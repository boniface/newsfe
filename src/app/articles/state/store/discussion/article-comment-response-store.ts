import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ArticleCommentResponse} from '../../models/discussion/article-comment-response.model';

export interface ArticleCommentResponseState extends EntityState<ArticleCommentResponse, string> {
}

@StoreConfig({
  name: 'responses',
  idKey: 'id',
  cache: {
    ttl: 3600000
  }
})
export class ArticleCommentResponseStore  extends EntityStore<ArticleCommentResponseState, ArticleCommentResponse> {
  constructor() {
    super();
  }
}

