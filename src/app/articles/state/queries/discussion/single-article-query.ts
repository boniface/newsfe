import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ArticlesState, ArticlesStore} from '../../store/articles/articles-store';
import {Article} from '../../models/articles/article.model';
import {SingleArticleService} from '../../services/discussion/single-article-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SingleArticleQuery extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesStore,
    private service: SingleArticleService
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


}
