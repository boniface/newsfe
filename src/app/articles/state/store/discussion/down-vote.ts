import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {DownVote} from '../../models/discussion/down-vote.model';

export interface DownVoteState extends EntityState<DownVote, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'downvotes',
  idKey: 'commentId',
})
export class DownVoteStore extends EntityStore<DownVoteState, DownVote> {
  constructor() {
    super();
  }
}
