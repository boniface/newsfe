import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../shared/BaseComponent';
import {Article} from '../../state/models/article.model';
import {CanonicalService} from '../../../shared/util/canonical.service';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ArticlesQueries} from '../../state/queries/articles-queries';
import {takeUntil} from 'rxjs/operators';
import {ZONE} from '../../../shared/util/Utils';
import {ArticlesLastMonthQueries} from '../../state/queries/articles-last-month-queries';
import {ArticlesLastWeekQueries} from '../../state/queries/articles-last-week-queries';
import {ArticlesMonthQueries} from '../../state/queries/articles-month-queries';
import {ArticlesWeekQueries} from '../../state/queries/articles-week-queries';
import {ArticlesTodayQueries} from '../../state/queries/articles-today-queries';
import {ArticlesYesterdayQueries} from '../../state/queries/articles-yesterday-queries';
import {ViewsQueries} from '../../state/queries/views-queries';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent extends BaseComponent implements OnInit {
  data: Date = new Date();
  title = 'Zambia Hash: The Single Source of All the News Headlines in Zambia';
  todayArticles: Article[];
  yesterdayArticles: Article[];
  thisWeekArticles: Article[];
  lastWeekArticles: Article[];
  thisMonthArticles: Article[];
  lastMonthArticles: Article[];


  constructor(
    private canonicalService: CanonicalService,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private articleQueries: ArticlesQueries,
    private articlesLastMonthQueries: ArticlesLastMonthQueries,
    private articlesLastWeekQueries: ArticlesLastWeekQueries,
    private articlesMonthQueries: ArticlesMonthQueries,
    private articlesWeekQueries: ArticlesWeekQueries,
    private articlesTodayQueries: ArticlesTodayQueries,
    private articlesYesterdayQueries: ArticlesYesterdayQueries,
    private viewsQueries: ViewsQueries,
  ) {
    super();
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'Description', content: 'The Single Source of All Online News Headlines From Zambia'}
    );

    this.articleQueries.getTodayArticles(ZONE)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.todayArticles = articles;
      });

    this.articlesLastMonthQueries
      .getLastMonthZoneArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.lastMonthArticles = articles;
      });

    this.articlesLastWeekQueries
      .getLastWeekZoneArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.lastWeekArticles = articles;
      });

    this.articlesMonthQueries
      .getMonthZoneArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisMonthArticles = articles;
      });

    this.articlesWeekQueries
      .getWeekZoneArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisWeekArticles = articles;
      });

    this.articlesTodayQueries
      .getTodayZoneArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.todayArticles = articles;
      });

    this.articlesYesterdayQueries
      .getYesterdayZoneArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.yesterdayArticles = articles;
      });
  }

  getArticleViews(articleId: string): number {
    let articleViews: number;
    this.viewsQueries
      .getViews(articleId)
      .pipe(takeUntil(this.destroyed))
      .subscribe( views => articleViews =views.counter);
    return articleViews;
  }

  getTodaySiteArticles(siteCode: string): void {
    this.articlesTodayQueries
      .getTodaySiteArticles(siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.todayArticles = articles;
      });
  }

  getYesterdaySiteArticles(siteCode: string): void {
    this.articlesYesterdayQueries
      .getYesterdaySiteArticles(siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.yesterdayArticles = articles;
      });
  }

  getWeekSiteArticles(siteCode: string): void {
    this.articlesWeekQueries
      .getWeekSiteArticles(siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisWeekArticles = articles;
      });
  }

  getLastWeekSiteArticles(siteCode: string): void {
    this.articlesLastWeekQueries
      .getLastWeekSiteArticles(siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.lastWeekArticles = articles;
      });
  }

  getMonthSiteArticles(siteCode: string): void {
    this.articlesMonthQueries
      .geMonthSiteArticles(siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisMonthArticles = articles;
      });
  }

  getLastMonthSiteArticles(siteCode: string): void {
    this.articlesLastMonthQueries
      .getLastMonthSiteArticles(siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.thisMonthArticles = articles;
      });
  }
}
