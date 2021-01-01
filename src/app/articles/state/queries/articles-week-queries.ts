import {QueryEntity} from '@datorama/akita';
import {ArticlesState} from '../store/articles-store';
import {Article} from '../models/article.model';
import {ArticlesTodayStore} from '../store/articles-today-store';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs';
import {ZONE} from '../../../shared/util/Utils';
import {ArticlesLastMonthStore} from '../store/articles-last-month-store';
import {ArticlesWeekStore} from '../store/articles-week-store';

export class ArticlesWeekQueries extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesWeekStore,
    private service: ArticleService
  ) {
    super(store);
  }

  public getArticle(id: string): Observable<Article> {
    return this.selectEntity(id);
  }

  public getArticles(): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getThisWeekArticles(ZONE)
        .subscribe();
      return this.selectAll();
    }
    return this.selectAll();
  }

  public getWeekZoneArticles(): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getThisWeekArticles(ZONE)
        .subscribe();
      return this.selectAll({
        filterBy: [
          entity => entity.site.zone === ZONE
        ]
      });
    }
    return this.selectAll({
      filterBy: [
        entity => entity.site.zone === ZONE
      ]
    });
  }

  public getWeekSiteArticles(siteCode: string): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getThisWeekArticles(ZONE)
        .subscribe();
      return this.selectAll({
        filterBy: [
          entity => entity.site.siteCode === siteCode
        ]
      });
    }
    return this.selectAll({
      filterBy: [
        entity => entity.site.siteCode === siteCode
      ]
    });
  }
}
