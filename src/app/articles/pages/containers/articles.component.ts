import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../shared/BaseComponent';
import {Article} from '../../state/models/article.model';
import {CanonicalService} from '../../../shared/util/canonical.service';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ArticlesQueries} from '../../state/queries/articles-queries';
import {takeUntil} from 'rxjs/operators';
import {ZONE} from '../../../shared/util/Utils';

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

  }

}
