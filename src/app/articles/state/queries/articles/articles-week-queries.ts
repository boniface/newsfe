import {QueryEntity} from '@datorama/akita';
import {ArticlesState} from '../../store/articles/articles-store';
import {Article} from '../../models/articles/article.model';
import {ArticleService} from '../../services/articles/article.service';
import {Observable} from 'rxjs';
import {ZONE} from '../../../../shared/util/Utils';
import {ArticlesWeekStore} from '../../store/articles/articles-week-store';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
