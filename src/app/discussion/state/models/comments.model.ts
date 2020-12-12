import {ArticleComment} from '../../../articles/state/models/article-comment.model';

export interface Comments {
  message: string;
  comments: ArticleComment[];
}
