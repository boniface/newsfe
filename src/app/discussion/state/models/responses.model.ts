import {ArticleCommentResponse} from '../../../articles/state/models/article-comment-response.model';

export interface Responses {
  message: string;
  responses: ArticleCommentResponse[];
}
