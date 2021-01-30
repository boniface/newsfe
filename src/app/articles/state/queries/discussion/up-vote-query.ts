import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {UpVoteState, UpVoteStore} from '../../store/discussion/up-vote-store';
import {VotesService} from '../../services/discussion/votes.service';
import {UpVote} from '../../models/discussion/up-vote.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UpVoteQuery extends QueryEntity<UpVoteState, UpVote> {
  constructor(
    protected store: UpVoteStore,
    private service: VotesService
  ) {
    super(store);
  }

  getUpVote(commentId: string): Observable<UpVote> {
    if (this.hasEntity(commentId) === false) {
      this.service.getCommentsVotes(commentId);
      return this.selectEntity(commentId);
    }
    return this.selectEntity(commentId);
  }

}
