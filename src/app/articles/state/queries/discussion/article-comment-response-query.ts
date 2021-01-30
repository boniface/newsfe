import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ArticleCommentResponseState, ArticleCommentResponseStore} from '../../store/discussion/article-comment-response-store';
import {ArticleCommentResponseService} from '../../services/discussion/article-comment-response.service';
import {ArticleCommentResponse} from '../../models/discussion/article-comment-response.model';
import {Observable} from 'rxjs';

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

  getCommentResponses(commentId: string): Observable<ArticleCommentResponse[]> {
    if (this.hasEntity() === false) {
      this.service
        .getCommentResponses(commentId)
        .subscribe();
      return this.selectAll({
        filterBy: [
          (entity) => entity.commentId === commentId,
        ]
      });
    }
    return this.selectAll({
      filterBy: [
        (entity) => entity.commentId === commentId,
      ]
    });
  }

  getComment(responseId: string): Observable<ArticleCommentResponse> {
    if (this.hasEntity(responseId) === false) {
      this.service
        .getResponse(responseId)
        .subscribe();
      return this.selectEntity(responseId);
    }
    return this.selectEntity(responseId);
  }
}
