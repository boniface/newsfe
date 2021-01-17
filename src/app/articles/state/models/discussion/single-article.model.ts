import {Article} from '../articles/article.model';
import {ArticleComment} from './article-comment.model';

export class SingleArticle {
  article: Article;
  articleComments: ArticleComment[];
}
