import {EntityStore, StoreConfig} from '@datorama/akita';
import {ArticlesState} from './articles-store';
import {Article} from '../../models/articles/article.model';
import {Injectable} from '@angular/core';

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
export class RestOfMonthStore extends EntityStore<ArticlesState, Article> {
  constructor() {
    super();
  }
}
