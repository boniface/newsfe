import {QueryEntity} from '@datorama/akita';
import {ArticlesState} from '../store/articles-store';
import {Article} from '../models/article.model';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs';
import {ZONE} from '../../../shared/util/Utils';
import {ArticlesYesterdayStore} from '../store/articles-yesterday-store';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ArticlesYesterdayQueries extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesYesterdayStore,
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

  public getYesterdayZoneArticles(): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getYesterdayArticles(ZONE)
        .subscribe();
      return this.selectAll({
        filterBy: [
          entity => entity.site.zone === ZONE
        ]
      });
    }
  }
  public getYesterdaySiteArticles(siteCode: string): Observable<Article[]> {
    if (this.hasEntity() === false) {
      this.service
        .getYesterdayArticles(ZONE)
        .subscribe();
      return this.selectAll({
        filterBy: [
          entity => entity.site.siteCode === siteCode
        ]
      });
    }
  }
}
