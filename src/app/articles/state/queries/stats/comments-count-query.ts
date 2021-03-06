import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {CommentsCount} from '../../models/stats/comments-count-model';
import {CommentsCountState, CommentsCountStore} from '../../store/stats/comments-count-store';
import {CommentsCountService} from '../../services/stats/comments-count-service';

@Injectable({
  providedIn: 'root'
})

export class CommentsCountQuery  extends QueryEntity<CommentsCountState, CommentsCount> {
  constructor(
    protected store: CommentsCountStore,
    private service: CommentsCountService
  ) {
    super(store);
  }

  getArticleCommentsCount(id: string): Observable<CommentsCount> {
    if (this.hasEntity(id) === false) {
      return this.service.getCommentsCount(id);
    }
    return this.selectEntity(id);
  }
}
