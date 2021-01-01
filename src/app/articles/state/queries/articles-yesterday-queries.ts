import {QueryEntity} from '@datorama/akita';
import {ArticlesState} from '../store/articles-store';
import {Article} from '../models/article.model';
import {ArticlesTodayStore} from '../store/articles-today-store';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs';
import {ZONE} from '../../../shared/util/Utils';

export class ArticlesYesterdayQueries extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesTodayStore,
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

  public getTodayZoneArticles(zone: string): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getTodayArticles(zone)
        .subscribe();
      return this.selectAll({
        filterBy: [
          entity => entity.site.zone === zone
        ]
      });
    }
  }
  public getTodaySiteArticles(siteCode: string): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getTodayArticles(ZONE)
        .subscribe();
      return this.selectAll({
        filterBy: [
          entity => entity.site.siteCode === siteCode
        ]
      });
    }
  }
}
