import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Article} from '../../models/articles/article.model';

export interface ArticlesState extends EntityState<Article, string> {
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'articles',
  idKey: 'id',
  cache: {
    ttl: 3600000
  }
})
export class ArticlesStore extends EntityStore<ArticlesState, Article> {
  constructor() {
    super();
  }
}
