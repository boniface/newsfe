import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {ArticlesStore} from '../store/articles-store';
import {Observable} from 'rxjs';
import {Article} from '../models/article.model';
import {ApiErrors} from '../../../shared/util/ApiErrors';
import {catchError, tap} from 'rxjs/operators';
import {ArticleCount} from '../models/article-count.model';
import {ArticleCountStore} from '../store/article-count-store';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private base = '/articles';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private articlesStore: ArticlesStore,
    private articleCountStore: ArticleCountStore,
  ) {
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

  public getTodayArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/today/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }

  public getTodayArticleCount(zone: string): Observable<ArticleCount> {
    const url = BASE_URL + this.base + '/today/count/' + zone.toUpperCase();
    return this.http
      .get<ArticleCount>(url, this.options)
      .pipe(
        tap(articlesCount => this.articleCountStore.add(articlesCount)),
        catchError(ApiErrors.handleError<ArticleCount>('Zone Stories'))
      );
  }
}
