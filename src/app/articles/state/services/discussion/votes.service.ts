import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL, Util} from '../../../../shared/util/Utils';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ApiErrors} from '../../../../shared/util/ApiErrors';
import {ArticleCommentStore} from '../../store/discussion/article-comment-store';
import {ArticleCommentResponseStore} from '../../store/discussion/article-comment-response-store';
import {ArticlesStore} from '../../store/articles/articles-store';
import {DownVoteStore} from '../../store/discussion/down-vote-store';
import {UpVoteStore} from '../../store/discussion/up-vote-store';
import {Votes} from '../../models/discussion/votes.model';
import {Vote} from '../../models/discussion/vote-model';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  private base = '/discuss/vote';
  private options = {headers: Util.headers()};

  constructor(
    private http: HttpClient,
    private article: ArticleCommentStore,
    private articleCommentResponseStore: ArticleCommentResponseStore,
    private articlesStore: ArticlesStore,
    private downVoteStore: DownVoteStore,
    private upVoteStore: UpVoteStore,
  ) {
  }

  public getCommentsVotes(commentId: string): Observable<Votes> {
    const url = BASE_URL + this.base + '/get/' + commentId;
    return this.http.get<Votes>(url, this.options)
      .pipe(
        tap(votes => {
            this.downVoteStore.add(votes?.downVotes);
            this.upVoteStore.add(votes?.upVotes);
          }
        ),
        catchError(ApiErrors.handleError<Votes>('get Key '))
      );
  }

  public castVoteUp(vote: Vote): Observable<Votes> {
    const url = BASE_URL + this.base + '/up';
    return this.http.post<Votes>(url, vote, this.options)
      .pipe(
        tap(votes => {
            this.downVoteStore.add(votes?.downVotes);
            this.upVoteStore.add(votes?.upVotes);
          }
        ),
        catchError(ApiErrors.handleError<Votes>('get Key '))
      );
  }

  public castVoteDown(vote: Vote): Observable<Votes> {
    const url = BASE_URL + this.base + '/down';
    return this.http.post<Votes>(url, vote, this.options)
      .pipe(
        tap(votes => {
            this.downVoteStore.add(votes?.downVotes);
            this.upVoteStore.add(votes?.upVotes);
          }
        ),
        catchError(ApiErrors.handleError<Votes>('get Key '))
      );
  }
}
