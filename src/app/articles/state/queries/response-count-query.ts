import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {CommentsCountService} from '../services/comments-count-service';
import {ResponsesCount} from '../models/responses-count-model';
import {ResponsesCountState, ResponsesCountStore} from '../store/responses-count-store';

@Injectable({
  providedIn: 'root'
})

export class ResponseCountQuery  extends QueryEntity<ResponsesCountState, ResponsesCount> {
  constructor(
    protected store: ResponsesCountStore,
    private service: CommentsCountService
  ) {
    super(store);
  }

  getArticleResponsesCount(id: string): Observable<ResponsesCount> {
    if (this.hasEntity(id) === false) {
      return this.service.getResponseCount(id);
    }
    return this.selectEntity(id);
  }
}
