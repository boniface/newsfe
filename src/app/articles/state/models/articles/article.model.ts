import {Website} from '../../../../websites/state/models/website.model';
import {ArticleStats} from '../stats/article-stats.model';

export interface Article {
  id: string;
  title: string;
  site?: Website;
  metaDescription: string;
  keyWords: string;
  content: string;
  articleLink: string;
  image?: string;
  date: Date;
  seoSlug: string;
  articleStats?: ArticleStats;
}

