import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {ViewsStore} from '../store/views-store';
import {Views} from '../models/views.model';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../shared/util/ApiErrors';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
  private base = '/articles/count';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private store: ViewsStore) {
  }

  public countView(entity: Views): Observable<Views> {
    const url = BASE_URL + this.base + '/view';
    return this.http.post<Views>(url, entity, this.options)
      .pipe(
        tap(views => {
          this.store.add(views);
        }),
        catchError(ApiErrors.handleError<Views>('create '))
      );
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
