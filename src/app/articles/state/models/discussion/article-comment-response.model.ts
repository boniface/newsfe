import {Votes} from './votes.model';

export interface ArticleCommentResponse {
  responseId: string;
  commentId: string;
  authorId: string;
  screenName?: string;
  response: string;
  isCode?: string;
  votes?: Votes;
  date: Date;
}


