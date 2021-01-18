import {Injectable} from '@angular/core';
import {EntityStore, StoreConfig} from '@datorama/akita';
import {ArticlesState} from '../articles/articles-store';
import {Article} from '../../models/articles/article.model';

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
export class ArticleStore  extends EntityStore<ArticlesState, Article> {
  constructor() {
    super();
  }
}
