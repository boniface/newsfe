import {QueryEntity} from '@datorama/akita';
import {ArticlesState} from '../../store/articles/articles-store';
import {Article} from '../../models/articles/article.model';
import {ArticlesTodayStore} from '../../store/articles/articles-today-store';
import {ArticleService} from '../../services/articles/article.service';
import {Observable} from 'rxjs';
import {ZONE} from '../../../../shared/util/Utils';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ArticlesTodayQueries extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesTodayStore,
    private service: ArticleService
  ) {
    super(store);
  }

  public getArticle(id: string): Observable<Article> {
    if (this.hasEntity(id) === false) {
      this.service
        .getArticle(id)
        .subscribe();
      return this.selectEntity(id);
    }
    return this.selectEntity(id);
  }

  public getArticles(): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getTodayArticles(ZONE)
        .subscribe();
      return this.selectAll();
    }
    return this.selectAll();
  }

  public getTodayZoneArticles(): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getTodayArticles(ZONE)
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
    return this.selectAll({
      filterBy: [
        entity => entity.site.siteCode === siteCode
      ]
    });
  }
}
