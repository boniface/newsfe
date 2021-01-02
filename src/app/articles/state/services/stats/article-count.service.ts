import { Injectable } from '@angular/core';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {ViewsStore} from '../../store/stats/views-store';
import {Observable} from 'rxjs';
import {Views} from '../../models/stats/views.model';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';

@Injectable({
  providedIn: 'root'
})
export class ArticleCountService {
  private base = '/articles';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private store: ViewsStore) {
  }
  public getViews(id: string): Observable<Views> {
    const url = BASE_URL + this.base + '/get/' + id;
    return this.http.get<Views>(url, this.options)
      .pipe(
        tap(entity => this.store.add(entity)),
        catchError(ApiErrors.handleError<Views>('get Key '))
      );
  }
}
