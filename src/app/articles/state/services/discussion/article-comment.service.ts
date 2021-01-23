import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {ArticleCommentStore} from '../../store/discussion/article-comment-store';
import {ArticleCommentResponseStore} from '../../store/discussion/article-comment-response-store';
import {ArticlesStore} from '../../store/articles/articles-store';
import {DownVoteStore} from '../../store/discussion/down-vote-store';
import {UpVoteStore} from '../../store/discussion/up-vote-store';
import {Comment} from '../../models/discussion/comment.model';
import {SingleArticle} from '../../models/discussion/single-article.model';
import {ArticleComment} from '../../models/discussion/article-comment.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommentService {
  private base = '/discuss/comment';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private articleCommentStore: ArticleCommentStore,
    private articleCommentResponseStore: ArticleCommentResponseStore,
    private articlesStore: ArticlesStore,
    private downVoteStore: DownVoteStore,
    private upVoteStore: UpVoteStore,
  ) {
  }


  public postComment(discussion: Comment): Observable<SingleArticle> {
    const url = BASE_URL + this.base + '/add';
    return this.http.post<SingleArticle>(url, discussion, this.options)
      .pipe(
        tap(article => {
            this.articlesStore.add(article.article);
            this.articleCommentStore.add(article.articleComments);
            for (const comment of article.articleComments) {
              this.articleCommentResponseStore.add(comment.responses);
              this.downVoteStore.add(comment.votes?.downVotes);
              this.upVoteStore.add(comment.votes?.upVotes);
            }
          }
        ),
        catchError(ApiErrors.handleError<SingleArticle>('get Key '))
      );
  }

  public getComment(commentId: string): Observable<ArticleComment> {
    const url = BASE_URL + this.base + '/' + commentId;
    return this.http.get<ArticleComment>(url, this.options)
      .pipe(
        tap(comments => {
            this.articleCommentStore.add(comments);
          }
        ),
        catchError(ApiErrors.handleError<ArticleComment>('get Key '))
      );
  }

  public getArticleComments(articleId: string): Observable<ArticleComment> {
    const url = BASE_URL + this.base + '/all/' + articleId;
    return this.http.get<ArticleComment>(url, this.options)
      .pipe(
        tap(comments => {
            this.articleCommentStore.add(comments);
          }
        ),
        catchError(ApiErrors.handleError<ArticleComment>('get Key '))
      );
  }
}
