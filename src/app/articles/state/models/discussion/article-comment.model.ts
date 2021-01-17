import {ArticleCommentResponse} from './article-comment-response.model';
import {Votes} from './votes.model';

export interface ArticleComment {
  commentId: string;
  websiteId: string;
  articleId: string;
  authorId: string;
  screenName?: string;
  comment: string;
  responses: ArticleCommentResponse[];
  votes?: Votes;
  isCode?: string;
  date: Date;
}


