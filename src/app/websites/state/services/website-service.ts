import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {WebsiteStore} from '../store/website-store';
import {Observable} from 'rxjs';
import {Website} from '../models/website.model';
import {ApiErrors} from '../../../shared/util/ApiErrors';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebsiteService {
  private base = '/news/views';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private store: WebsiteStore) {
  }

  public getZoneSites(zone: string): Observable<Website[]> {
    const url = BASE_URL + this.base + '/get/' + zone;
    return this.http
      .get<Website[]>(url, this.options)
      .pipe(
        tap(entities => this.store.add(entities)),
        catchError(ApiErrors.handleError<Website[]>('get Key '))
      );
  }
}
