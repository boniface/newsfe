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
import {SingleArticle} from '../../models/discussion/single-article.model';

@Injectable({
  providedIn: 'root'
})
export class SingleArticleService {
  private base = '/articles';
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

  public getArticle(linkhash: string): Observable<SingleArticle> {
    const url = BASE_URL + this.base + '/' + linkhash;
    return this.http.get<SingleArticle>(url, this.options)
      .pipe(
        tap(article => {
            this.articlesStore.add(article.article);
            this.articleCommentStore.add(article.articleComments);
            for (const comment of article.articleComments) {
              this.articleCommentResponseStore.add(comment.responses);
              this.downVoteStore.add(comment.votes?.downVote);
              this.upVoteStore.add(comment.votes?.upVotes);
            }
          }
        ),
        catchError(ApiErrors.handleError<SingleArticle>('get Key '))
      );
  }

}
