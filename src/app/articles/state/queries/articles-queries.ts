import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {ArticlesState, ArticlesStore} from '../store/articles-store';
import {Article} from '../models/article.model';
import {ArticleService} from '../services/article.service';

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

  public getSitesArticles(siteCode: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.siteCode === siteCode
    });
  }
}
