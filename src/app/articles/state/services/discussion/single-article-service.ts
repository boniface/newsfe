import {Injectable} from '@angular/core';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleCount} from '../../models/stats/article-count.model';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {Article} from '../../models/articles/article.model';

@Injectable({
  providedIn: 'root'
})
export class SingleArticleService {
  private base = '/articles';
  private options = {headers: Util.headers()};


  constructor(
    private http: HttpClient,
  ) {
  }

  public getArticle(linkhash: string): Observable<Article> {
    const url = BASE_URL + this.base + '/' + linkhash;
    return this.http.get<Article>(url, this.options)
      .pipe(
        tap(story => this.articlesTodayStore.add(story)),
        catchError(ApiErrors.handleError<Article>('get Key '))
      );
  }

}
