import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {UpVote} from '../../models/discussion/up-vote.model';

export interface UpVoteState extends EntityState<UpVote, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'upvotes',
  idKey: 'commentId',
})
export class UpVoteStore extends EntityStore<UpVoteState, UpVote> {
  constructor() {
    super();
  }
}
