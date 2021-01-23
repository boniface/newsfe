import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ArticleCommentService} from '../../services/discussion/article-comment.service';
import {ArticleCommentState, ArticleCommentStore} from '../../store/discussion/article-comment-store';
import {ArticleComment} from '../../models/discussion/article-comment.model';

@Injectable({
  providedIn: 'root'
})

export class ArticleCommentQuery extends QueryEntity<ArticleCommentState, ArticleComment> {
  constructor(
    protected store: ArticleCommentStore,
    private service: ArticleCommentService
  ) {
    super(store);
  }
}
