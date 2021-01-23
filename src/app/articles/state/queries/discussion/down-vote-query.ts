import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {DownVoteState, DownVoteStore} from '../../store/discussion/down-vote-store';
import {VotesService} from '../../services/discussion/votes.service';
import {DownVote} from '../../models/discussion/down-vote.model';

@Injectable({
  providedIn: 'root'
})


export class DownVoteQuery extends QueryEntity<DownVoteState, DownVote> {
  constructor(
    protected store: DownVoteStore,
    private service: VotesService
  ) {
    super(store);
  }
}
