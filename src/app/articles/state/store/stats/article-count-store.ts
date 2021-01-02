import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {ArticleCount} from '../../models/stats/article-count.model';

export class ArticleCountState implements EntityState<ArticleCount, string> {
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'count',
})
export class ArticleCountStore extends EntityStore<ArticleCountState, ArticleCount> {
  constructor() {
    super();
  }
}
