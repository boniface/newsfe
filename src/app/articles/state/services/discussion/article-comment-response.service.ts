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
import {ArticleCommentResponse} from '../../models/discussion/article-comment-response.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommentResponseService {
  private base = '/discuss/response';
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


  public postResponse(discussion: Comment): Observable<SingleArticle> {
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

  public getResponse(commentId: string): Observable<ArticleCommentResponse> {
    const url = BASE_URL + this.base + '/' + commentId;
    return this.http.get<ArticleCommentResponse>(url, this.options)
      .pipe(
        tap(response => {
            this.articleCommentResponseStore.add(response);
          }
        ),
        catchError(ApiErrors.handleError<ArticleCommentResponse>('get Key '))
      );
  }

  public getCommentResponses(commentId: string): Observable<ArticleCommentResponse> {
    const url = BASE_URL + this.base + '/all/' + commentId;
    return this.http.get<ArticleCommentResponse>(url, this.options)
      .pipe(
        tap(responses => {
            this.articleCommentResponseStore.add(responses);
          }
        ),
        catchError(ApiErrors.handleError<ArticleCommentResponse>('get Key '))
      );
  }
}
