import {DownVote} from './down-vote.model';
import {UpVote} from './up-vote.model';

export interface Votes {
  upVotes?: UpVote;
  downVote?: DownVote;
}
