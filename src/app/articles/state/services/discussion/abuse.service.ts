import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {Abuse} from '../../models/discussion/abuse.model';

@Injectable({
  providedIn: 'root'
})
export class AbuseService {

  private base = '/discuss/abuse';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient
  ) {
  }

  public reportCommuteAbuse(abuse: Abuse): Observable<boolean> {
    const url = BASE_URL + this.base + '/report';
    return this.http.post<boolean>(url, abuse, this.options)
      .pipe(
        catchError(ApiErrors.handleError<boolean>('get Key '))
      );
  }
}
