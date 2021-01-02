import {ArticleComment} from './article-comment.model';

export interface Comments {
  message: string;
  comments: ArticleComment[];
}
