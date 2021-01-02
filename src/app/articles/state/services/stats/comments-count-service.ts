import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {CommentsCountStore} from '../../store/stats/comments-count-store';
import {ResponsesCountStore} from '../../store/stats/responses-count-store';
import {CommentsCount} from '../../models/stats/comments-count-model';
import {ResponsesCount} from '../../models/stats/responses-count-model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsCountService {
  private base = '/articles/count';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private commentsStore: CommentsCountStore,
    private responsesStore: ResponsesCountStore) {
  }

  public getCommentsCount(id: string): Observable<CommentsCount> {
    const url = BASE_URL + this.base + '/comments/' + id;
    return this.http.get<CommentsCount>(url, this.options)
      .pipe(
        tap(entity => this.commentsStore.add(entity)),
        catchError(ApiErrors.handleError<CommentsCount>('get Key '))
      );
  }

  public getResponseCount(id: string): Observable<ResponsesCount> {
    const url = BASE_URL + this.base + '/responses/' + id;
    return this.http.get<ResponsesCount>(url, this.options)
      .pipe(
        tap(entity => this.responsesStore.add(entity)),
        catchError(ApiErrors.handleError<ResponsesCount>('get Key '))
      );
  }
}
