import { Injectable } from '@angular/core';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../../models/articles/article.model';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {ArticleCommentStore} from '../../store/discussion/article-comment-store';
import {ArticleCommentResponseStore} from '../../store/discussion/article-comment-response-store';
import {ArticlesStore} from '../../store/articles/articles-store';
import {DownVoteStore} from '../../store/discussion/down-vote-store';
import {UpVoteStore} from '../../store/discussion/up-vote-store';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommentResponseService {
  private base = '/articles';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private article: ArticleCommentStore,
    private articleCommentResponseStore: ArticleCommentResponseStore,
    private articlesStore: ArticlesStore,
    private downVoteStore: DownVoteStore,
    private upVoteStore: UpVoteStore,
  ) { }

  public getArticle(linkhash: string): Observable<Article> {
    const url = BASE_URL + this.base + '/' + linkhash;
    return this.http.get<Article>(url, this.options)
      .pipe(
        tap(story => this.articlesTodayStore.add(story)),
        catchError(ApiErrors.handleError<Article>('get Key '))
      );
  }

  public getInitialData(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + 'articles/month/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }
}
