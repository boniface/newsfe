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

  private base = '/websites';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private store: WebsiteStore) {
  }

  public createEntity(entity: Website): Observable<boolean> {
    const url = BASE_URL + this.base + '/create';
    return this.http.post<boolean>(url, entity, this.options)
      .pipe(
        tap(_ => this.store.add(entity)),
        catchError(ApiErrors.handleError<boolean>('create '))
      );
  }

  public updateEntity(entity: Website): Observable<Boolean> {
    const url = BASE_URL + this.base + '/create';
    return this.http.post<boolean>(url, entity, this.options)
      .pipe(
        tap(_ => this.store.update(entity)),
        catchError(ApiErrors.handleError<boolean>('create '))
      );
  }

  public getEntity(id: string): Observable<Website> {
    const url = BASE_URL + this.base + '/get/' + id;
    return this.http.get<Website>(url, this.options)
      .pipe(
        tap(entity => this.store.add(entity)),
        catchError(ApiErrors.handleError<Website>('get Key '))
      );
  }

  public getEntities(): Observable<Website[]> {
    const url = BASE_URL + this.base + '/all';
    return this.http
      .get<Website[]>(url, this.options)
      .pipe(
        tap(entities => this.store.set(entities)),
        catchError(ApiErrors.handleError('Error', []))
      );
  }

  public getZoneSites(zone: string): Observable<Website[]> {
    const url = BASE_URL + this.base + '/zone/' + zone;
    return this.http
      .get<Website[]>(url, this.options)
      .pipe(
        tap(entities => this.store.set(entities)),
        catchError(ApiErrors.handleError('THERE IS ERROR IN THE API', []))
      );
  }

  public deleteEntity(entity: Website): Observable<boolean> {
    const url = BASE_URL + this.base + '/delete/' + entity.zone;
    return this.http.get<boolean>(url, this.options)
      .pipe(
        tap(_ => this.store.remove(entity.id)),
        catchError(ApiErrors.handleError<boolean>('deleteCases'))
      );
  }
}
