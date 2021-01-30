import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ArticleCommentService} from '../../services/discussion/article-comment.service';
import {ArticleCommentState, ArticleCommentStore} from '../../store/discussion/article-comment-store';
import {ArticleComment} from '../../models/discussion/article-comment.model';
import {Observable} from 'rxjs';

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

  getComments(articleId: string): Observable<ArticleComment[]> {
    if (this.hasEntity() === false) {
      this.service
        .getArticleComments(articleId)
        .subscribe();
      return this.selectAll({
        filterBy: [
          (entity) => entity.articleId === articleId,
        ]
      });
    }
    return this.selectAll({
      filterBy: [
        (entity) => entity.articleId === articleId,
      ]
    });
  }

  getComment(commentId: string): Observable<ArticleComment> {
    if (this.hasEntity(commentId) === false) {
      this.service
        .getComment(commentId)
        .subscribe();
      return this.selectEntity(commentId);
    }
    return this.selectEntity(commentId);
  }
}
