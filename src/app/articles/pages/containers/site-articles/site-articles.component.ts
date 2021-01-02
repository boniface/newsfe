import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../shared/BaseComponent';
import {Article} from '../../../state/models/articles/article.model';
import {CanonicalService} from '../../../../shared/util/canonical.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticlesQueries} from '../../../state/queries/articles/articles-queries';
import {ArticlesLastMonthQueries} from '../../../state/queries/articles/articles-last-month-queries';
import {ArticlesLastWeekQueries} from '../../../state/queries/articles/articles-last-week-queries';
import {ArticlesMonthQueries} from '../../../state/queries/articles/articles-month-queries';
import {ArticlesWeekQueries} from '../../../state/queries/articles/articles-week-queries';
import {Website} from '../../../../websites/state/models/website.model';
import {ArticlesTodayQueries} from '../../../state/queries/articles/articles-today-queries';
import {ArticlesYesterdayQueries} from '../../../state/queries/articles/articles-yesterday-queries';
import {ViewsQueries} from '../../../state/queries/stats/views-queries';
import {CommentsCountQuery} from '../../../state/queries/stats/comments-count-query';
import {ResponseCountQuery} from '../../../state/queries/stats/response-count-query';
import {takeUntil} from 'rxjs/operators';
import {ZONE} from '../../../../shared/util/Utils';

@Component({
  selector: 'app-site-articles',
  templateUrl: './site-articles.component.html',
  styleUrls: ['./site-articles.component.css']
})
export class SiteArticlesComponent extends BaseComponent implements OnInit {
  data: Date = new Date();
  title = 'Zambia Hash: The Single Source of All the News Headlines in Zambia';
  todayArticles: Article[];
  yesterdayArticles: Article[];
  thisWeekArticles: Article[];
  lastWeekArticles: Article[];
  thisMonthArticles: Article[];
  lastMonthArticles: Article[];
  siteCode: string;
  website: Website;


  constructor(
    private canonicalService: CanonicalService,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private articleQueries: ArticlesQueries,
    private articlesLastMonthQueries: ArticlesLastMonthQueries,
    private articlesLastWeekQueries: ArticlesLastWeekQueries,
    private articlesMonthQueries: ArticlesMonthQueries,
    private articlesWeekQueries: ArticlesWeekQueries,
    private articlesTodayQueries: ArticlesTodayQueries,
    private articlesYesterdayQueries: ArticlesYesterdayQueries,
    private viewsQueries: ViewsQueries,
    private commentsCountQuery: CommentsCountQuery,
    private responseCountQuery: ResponseCountQuery,
  ) {
    super();
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'Description', content: 'The Single Source of All Online News Headlines From Zambia'}
    );
    this.activeRoute.params
      .subscribe(params => {
        this.siteCode = params.sitecode;
      });

    this.articleQueries
      .getTodayArticles(ZONE)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.todayArticles = articles;
      });

    this.articlesLastMonthQueries
      .getLastMonthSiteArticles(this.siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.lastMonthArticles = articles;
      });

    this.articlesLastWeekQueries
      .getLastWeekSiteArticles(this.siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.lastWeekArticles = articles;
      });

    this.articlesMonthQueries
      .getMonthSiteArticles(this.siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisMonthArticles = articles;
      });

    this.articlesWeekQueries
      .getWeekSiteArticles(this.siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisWeekArticles = articles;
      });

    this.articlesTodayQueries
      .getTodaySiteArticles(this.siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.todayArticles = articles;
      });

    this.articlesYesterdayQueries
      .getYesterdaySiteArticles(this.siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.yesterdayArticles = articles;
      });
  }

}
