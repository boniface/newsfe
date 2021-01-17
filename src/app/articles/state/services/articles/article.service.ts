import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {ArticlesStore} from '../../store/articles/articles-store';
import {Observable} from 'rxjs';
import {Article} from '../../models/articles/article.model';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {catchError, tap} from 'rxjs/operators';
import {ArticleCount} from '../../models/stats/article-count.model';
import {ArticleCountStore} from '../../store/stats/article-count-store';
import {ArticlesLastMonthStore} from '../../store/articles/articles-last-month-store';
import {ArticlesTodayStore} from '../../store/articles/articles-today-store';
import {ArticlesYesterdayStore} from '../../store/articles/articles-yesterday-store';
import {ArticlesWeekStore} from '../../store/articles/articles-week-store';
import {ArticlesLastWeekStore} from '../../store/articles/articles-last-week-store';
import {ArticlesMonthStore} from '../../store/articles/articles-month-store';
import {ArticlesRestOfWeekStore} from '../../store/articles/articles-rest-of-week-store';
import {RestOfMonthStore} from '../../store/articles/rest-of-month-store';

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
    private articlesTodayStore: ArticlesTodayStore,
    private articlesYesterdayStore: ArticlesYesterdayStore,
    private articlesWeekStore: ArticlesWeekStore,
    private articlesLastWeekStore: ArticlesLastWeekStore,
    private articlesMonthStore: ArticlesMonthStore,
    private  articlesLastMonthStore: ArticlesLastMonthStore,
    private articlesRestOfWeekStore: ArticlesRestOfWeekStore,
    private restOfMonthStore: RestOfMonthStore,
  ) {
  }

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
  public getTodayArticleCount(zone: string): Observable<ArticleCount> {
    const url = BASE_URL + this.base + '/today/count/' + zone.toUpperCase();
    return this.http
      .get<ArticleCount>(url, this.options)
      .pipe(
        tap(articlesCount => this.articleCountStore.add(articlesCount)),
        catchError(ApiErrors.handleError<ArticleCount>('Zone Stories'))
      );
  }

  public getTodayArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/today/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesTodayStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }


  public getYesterdayArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/yesterday/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesYesterdayStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }

  public getThisWeekArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/week/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesWeekStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }

  public getRestOfWeekArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/restweek/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesRestOfWeekStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }

  public getLastWeekArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/lastweek/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesLastWeekStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }


  public getThisMonthArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/month/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesMonthStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }
  public getRestOfMonthArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/restmonth/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.restOfMonthStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }

  public getLastMonthArticles(zone: string): Observable<Article[]> {
    const url = BASE_URL + this.base + '/lastmonth/' + zone.toUpperCase();
    return this.http
      .get<Article[]>(url, this.options)
      .pipe(
        tap(articles => this.articlesLastMonthStore.set(articles)),
        catchError(ApiErrors.handleError('Zone Stories', []))
      );
  }


}
