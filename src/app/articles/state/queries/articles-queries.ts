import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {ArticlesState, ArticlesStore} from '../store/articles-store';
import {Article} from '../models/article.model';
import {ArticleService} from '../services/article.service';
import {AppDates} from '../../../shared/util/AppDates';

@Injectable({
  providedIn: 'root'
})

export class ArticlesQueries extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesStore,
    private service: ArticleService
  ) {
    super(store);
  }

  public getArticle(id: string): Observable<Article> {
    return this.selectEntity(id);
  }

  public getArticles(): Observable<Article[]> {
    return this.selectAll();
  }

  public getTodayArticles(zone: string): Observable<Article[]> {

    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === zone &&
        entity.date === AppDates.today()
    });
  }

  public getYesterdayArticles(zone: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone &&
        entity.date === AppDates.yesterday()

    });
  }

  public getThisWeekArticles(zone: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone &&
      entity.date === AppDates.thisWeek()

    });
  }

  public getLastWeekArticles(zone: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone &&
      entity.date === AppDates.lastWeek()

    });
  }


  public getThisMonthArticles(zone: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === zone &&
        entity.date === AppDates.thisMonth()
    });
  }

  public getLastMonthArticles(zone: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === zone &&
        entity.date === AppDates.lastMonth()
    });
  }

  // Sites //

  public getTodaySitesArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === siteCode &&
        entity.date === AppDates.today()
    });
  }

  public getYesterdaySitesArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === siteCode &&
        entity.date === AppDates.yesterday()
    });
  }
  public getThisWeekSiteArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === siteCode &&
      entity.date === AppDates.thisWeek()

    });
  }

  public getLastWeekSiteArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === siteCode &&
      entity.date === AppDates.lastWeek()

    });
  }


  public getThisMonthSiteArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === siteCode &&
        entity.date === AppDates.thisMonth()
    });
  }

  public getLastMonthSiteArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === siteCode &&
        entity.date === AppDates.lastMonth()
    });
  }

}
