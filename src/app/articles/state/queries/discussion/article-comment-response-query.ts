import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ArticleCommentResponseState, ArticleCommentResponseStore} from '../../store/discussion/article-comment-response-store';
import {ArticleCommentResponseService} from '../../services/discussion/article-comment-response.service';
import {ArticleCommentResponse} from '../../models/discussion/article-comment-response.model';

@Injectable({
  providedIn: 'root'
})


export class ArticleCommentResponseQuery extends QueryEntity<ArticleCommentResponseState, ArticleCommentResponse> {
  constructor(
    protected store: ArticleCommentResponseStore,
    private service: ArticleCommentResponseService
  ) {
    super(store);
  }
}
