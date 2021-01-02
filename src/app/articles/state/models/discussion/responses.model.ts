import {ArticleCommentResponse} from './article-comment-response.model';

export interface Responses {
  message: string;
  responses: ArticleCommentResponse[];
}
